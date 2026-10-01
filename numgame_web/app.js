(() => {
  const SAVE_KEY = "solve-for-x.saved-game";
  const THEME_KEY = "solve-for-x.theme";
  const HIGH_SCORE_KEY = "solve-for-x.high-score";
  const byId = (id) => document.getElementById(id);
  const game = new NumberGame.Game();
  const elements = {
    level: byId("stat-level"), points: byId("stat-points"), lives: byId("stat-lives"),
    time: byId("stat-time"), questionNumber: byId("question-number"), title: byId("question-title"),
    range: byId("range-line"), answerCount: byId("answer-count"), clues: byId("clue-list"),
    message: byId("message"), seedCaption: byId("seed-caption"), entryLabel: byId("entry-label"),
    input: byId("answer-input"), action: byId("action-button"), hint: byId("hint-button"),
    hintCount: byId("hint-count"), toast: byId("points-toast"), footerSeed: byId("footer-seed"),
    settingsDialog: byId("settings-dialog"), definitionDialog: byId("definition-dialog"),
    continueDialog: byId("continue-dialog"), gameoverDialog: byId("gameover-dialog"),
    runTimesDialog: byId("run-times-dialog"),
  };
  let started = false;
  let transitionPending = false;
  let timerId = null;
  let toastTimeout = null;
  let audioContext;

  const theme = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.theme === theme);
    button.addEventListener("click", () => {
      document.documentElement.dataset.theme = button.dataset.theme;
      localStorage.setItem(THEME_KEY, button.dataset.theme);
      document.querySelectorAll("[data-theme]").forEach((option) => {
        option.classList.toggle("selected", option === button);
      });
    });
  });

  function updateStatus() {
    if (!game.gameOver && !elements.hintCount.isConnected) restoreHintButton();
    elements.level.textContent = started ? String(game.level).padStart(2, "0") : "—";
    elements.points.textContent = game.points.toLocaleString("en-US");
    elements.lives.textContent = started ? String(game.lives) : "3";
    elements.hintCount.textContent = started ? String(game.hintsAvailable) : "3";
    elements.footerSeed.textContent = `SEED · ${started && game.randomSeed
      ? "—" : started || game.gameOver ? game.seed.toString() : "—"}`;
  }

  function restoreHintButton() {
    const hintCount = document.createElement("span");
    hintCount.id = "hint-count";
    hintCount.textContent = String(game.hintsAvailable);
    elements.hint.replaceChildren(document.createTextNode("HINT "), hintCount);
    elements.hintCount = hintCount;
  }

  function renderQuestion(question) {
    if (!question) return;
    transitionPending = false;
    elements.questionNumber.textContent = `QUESTION ${String(game.questionNumber).padStart(2, "0")}`;
    elements.title.textContent = "Find a number that fits.";
    elements.range.textContent = `Choose a number from ${question.minimum} to ${question.maximum}`;
    elements.answerCount.textContent = `${question.solutions.length} possible ${question.solutions.length === 1 ? "answer" : "answers"}`
      + (game.debugMode ? ` [${question.lowestAnswer ?? Math.min(...question.solutions)}, ${question.highestAnswer ?? Math.max(...question.solutions)}]` : "");
    elements.clues.replaceChildren();
    question.clues.forEach((clue, index) => {
      const item = document.createElement("li");
      item.className = "clue-item";
      item.style.setProperty("--row", index);
      const number = document.createElement("span");
      number.className = "clue-index";
      number.textContent = String(index + 1).padStart(2, "0");
      const text = document.createElement("span");
      text.className = "clue-text";
      text.textContent = clue.text;
      const definition = document.createElement("button");
      definition.className = "clue-info";
      definition.type = "button";
      definition.textContent = "i";
      definition.setAttribute("aria-label", `Definition: ${clue.title}`);
      definition.title = `Definition: ${clue.title}`;
      definition.addEventListener("click", () => showDefinition(clue));
      item.append(number, text, definition);
      elements.clues.append(item);
    });
    elements.input.value = "";
    elements.input.placeholder = "Enter answer";
    elements.input.disabled = false;
    elements.input.dataset.mode = "answer";
    elements.entryLabel.textContent = "YOUR ANSWER";
    elements.action.textContent = "Submit answer";
    elements.action.disabled = false;
    elements.hint.disabled = false;
    updateStatus();
    updateSettings();
    startTimer();
  }

  function updateSettings() {
    byId("settings-question").textContent = started ? String(game.questionNumber) : "—";
    byId("settings-seed").textContent = started && game.randomSeed
      ? "Hidden while playing"
      : started || game.gameOver ? game.seed.toString() : (elements.input.value || "—");
    byId("settings-high-score").textContent = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0).toLocaleString("en-US");
    byId("save-game").disabled = !started;
    byId("skip-level").hidden = !(started && game.debugMode && game.level < 6);
  }

  function startTimer() {
    clearInterval(timerId);
    const update = () => {
      const elapsed = game.current ? Math.max(0, Date.now() - game.questionStartedAt) / 1000 : 0;
      elements.time.textContent = `${elapsed.toFixed(1)}s`;
      elements.time.classList.toggle("is-urgent", started && elapsed >= (game.level + 1) ** 2);
    };
    update();
    timerId = setInterval(update, 100);
  }

  function startGame() {
    const seed = elements.input.value.trim();
    try {
      game.start(seed);
      started = true;
      restoreHintButton();
      elements.seedCaption.textContent = game.randomSeed ? "" : `SEED ${game.seed}`;
      elements.message.textContent = "Hold a rule definition with the info button.";
      renderQuestion(game.current);
      saveGame();
    } catch (error) {
      elements.message.textContent = error.message;
      shake(elements.input);
    }
  }

  function submitAnswer() {
    if (!started || transitionPending) return;
    const answer = elements.input.value.trim();
    if (/^-?\d+$/.test(answer)) {
      const value = Number(answer);
      if (value < game.current.minimum || value > game.current.maximum) {
        elements.message.textContent = "That number is outside the allowed range.";
        shake(elements.range);
        return;
      }
    }
    const result = game.submit(answer);
    updateStatus();
    if (result.status === "INVALID") {
      elements.message.textContent = "Enter a whole number.";
      shake(elements.input);
      return;
    }
    if (result.status === "WRONG") {
      elements.message.textContent = "Not quite. Try another number.";
      elements.input.value = "";
      showClueFeedback(result.clueMatches);
      playTone(false);
      saveGame();
      return;
    }
    if (result.status === "GAME_OVER") {
      started = false;
      clearInterval(timerId);
      elements.input.value = "";
      elements.input.disabled = true;
      elements.hint.disabled = true;
      elements.action.textContent = "Restart game";
      elements.action.disabled = true;
      if (game.randomSeed) {
        elements.seedCaption.textContent = `SEED ${game.seed}`;
        elements.footerSeed.textContent = `SEED · ${game.seed}`;
      }
      elements.gameoverDialog.showModal();
      byId("gameover-copy").textContent = `One correct answer was ${result.correctAnswer}. You scored ${result.totalPoints.toLocaleString("en-US")} points across ${game.questionsAnswered} questions.`;
      byId("gameover-timer").textContent = `RUN TIME · ${formatDuration(result.runDurationMs)} · VIEW TIMES`;
      byId("gameover-timer").dataset.startedAt = String(result.runStartedAt);
      byId("gameover-timer").dataset.endedAt = String(result.runEndedAt);
      byId("return-home").addEventListener("click", resetHome, { once: true });
      localStorage.removeItem(SAVE_KEY);
      return;
    }

    transitionPending = true;
    elements.message.textContent = `Correct. +${result.pointsEarned.toLocaleString("en-US")} points.`
      + (result.levelUp ? ` Level ${result.level} unlocked. +1 life.` : "")
      + (result.specialBonusPoints ? ` ${result.specialBonusLabel} +${result.specialBonusPoints} points.` : "");
    elements.action.disabled = true;
    elements.hint.disabled = true;
    elements.input.disabled = true;
    showAnswerBonus(result);
    if (result.levelUp) animateLevelUp(result.level);
    playTone(true);
    showClueFeedback([], true);
    animateSpecialAnswer(Number(answer));
    if (game.randomSeed) updateHighScore(result.totalPoints);
    saveGame();
    window.setTimeout(() => {
      if (!started) return;
      renderQuestion(game.nextQuestion());
      elements.message.textContent = "Hold a rule definition with the info button.";
      saveGame();
    }, 820);
  }

  function requestHint() {
    if (game.gameOver) {
      elements.gameoverDialog.showModal();
      return;
    }
    if (!started || transitionPending) return;
    const result = game.requestHint();
    if (result.alreadyUsed) {
      shake(elements.hint);
      elements.message.textContent = "Only one hint per question.";
      return;
    }
    if (result.unavailable) {
      elements.message.textContent = "No hints available.";
      return;
    }
    renderQuestion(result.question);
    elements.message.textContent = `Hint added. ${result.hintsRemaining} remaining.`;
    saveGame();
  }

  function showDefinition(clue) {
    byId("definition-title").textContent = clue.title;
    byId("definition-copy").textContent = clue.explanation;
    elements.definitionDialog.showModal();
  }

  function showClueFeedback(matches, allCorrect = false) {
    [...elements.clues.children].forEach((item, index) => {
      item.classList.remove("is-match", "is-miss");
      item.classList.add(allCorrect || matches[index] ? "is-match" : "is-miss");
    });
  }

  function showAnswerBonus(result) {
    const labels = [];
    if (result.specialBonusLabel) labels.push(`${result.specialBonusLabel} +${result.specialBonusPoints}`);
    if (result.speedBonus) labels.push(["You're quick!", "That was fast!", "Speedy!"][Math.floor(Math.random() * 3)]);
    if (result.biggestAnswerBonus) labels.push(["That Was BIG", "Biggest Answer Bonus", "Big Deal"][Math.floor(Math.random() * 3)]);
    showToast(`${labels.length ? `${labels.join(" · ")}\n` : ""}+${result.pointsEarned.toLocaleString("en-US")} points`);
  }

  function animateLevelUp(level) {
    [...document.querySelectorAll(".key")].forEach((key, index) => {
      key.style.setProperty("--wave-index", index);
      key.classList.remove("is-level-wave");
      void key.offsetWidth;
      key.classList.add("is-level-wave");
      window.setTimeout(() => key.classList.remove("is-level-wave"), 1100);
    });
    const bubble = byId("level-up-bubble");
    bubble.textContent = `LEVEL UP · ${String(level).padStart(2, "0")}`;
    bubble.classList.remove("is-rising");
    void bubble.offsetWidth;
    bubble.classList.add("is-rising");
    window.setTimeout(() => bubble.classList.remove("is-rising"), 1700);
  }

  function showToast(text) {
    elements.toast.textContent = text;
    elements.toast.classList.remove("is-visible");
    void elements.toast.offsetWidth;
    elements.toast.classList.add("is-visible");
    clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1500);
  }

  function animateSpecialAnswer(answer) {
    const animation = answer === 67 ? "bounce" : answer === 69 ? "spin" : answer === 420 ? "fire" : null;
    if (!animation) return;
    const digits = String(answer).split("");
    [...document.querySelectorAll("[data-digit]")].forEach((button) => {
      if (!digits.includes(button.dataset.digit)) return;
      button.classList.add(`is-${animation}`);
      window.setTimeout(() => button.classList.remove(`is-${animation}`), animation === "fire" ? 2200 : 1800);
    });
  }

  function updateHighScore(points) {
    const highScore = Number(localStorage.getItem(HIGH_SCORE_KEY) || 0);
    if (points > highScore) localStorage.setItem(HIGH_SCORE_KEY, String(points));
  }

  function formatDuration(milliseconds) {
    const totalSeconds = Math.floor(Math.max(0, milliseconds) / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
  }

  byId("gameover-timer").addEventListener("click", () => {
    byId("run-start-time").textContent = new Date(
      Number(byId("gameover-timer").dataset.startedAt),
    ).toLocaleString();
    byId("run-end-time").textContent = new Date(
      Number(byId("gameover-timer").dataset.endedAt),
    ).toLocaleString();
    const levelList = byId("run-level-ups");
    levelList.replaceChildren();
    if (game.levelUpEvents.length === 0) {
      const emptyItem = document.createElement("li");
      emptyItem.textContent = "No level-ups in this run";
      levelList.append(emptyItem);
    } else {
      for (const event of game.levelUpEvents) {
        const item = document.createElement("li");
        const label = document.createElement("span");
        const timestamp = document.createElement("time");
        label.textContent = `Level ${event.level}`;
        timestamp.textContent = new Date(event.timestamp).toLocaleString();
        timestamp.dateTime = new Date(event.timestamp).toISOString();
        item.append(label, timestamp);
        levelList.append(item);
      }
    }
    elements.runTimesDialog.showModal();
  });
  byId("hide-gameover").addEventListener("click", () => {
    elements.gameoverDialog.close();
    elements.action.textContent = "Return home";
    elements.action.disabled = false;
    elements.hint.textContent = "SHOW RESULTS";
    elements.hint.disabled = false;
  });

  function saveGame() {
    if (!started) return;
    localStorage.setItem(SAVE_KEY, JSON.stringify(game.snapshot()));
  }

  function restoreGame() {
    try {
      const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (!saved) return;
      game.restore(saved);
      started = true;
      elements.seedCaption.textContent = game.randomSeed ? "RANDOM SEED" : `SEED ${game.seed}`;
      renderQuestion(game.current);
      elements.message.textContent = "Game restored.";
    } catch (_error) {
      localStorage.removeItem(SAVE_KEY);
    }
  }

  function resetHome() {
    clearInterval(timerId);
    localStorage.removeItem(SAVE_KEY);
    game.reset();
    started = false;
    transitionPending = false;
    elements.input.disabled = false;
    elements.input.dataset.mode = "seed";
    elements.input.value = "";
    elements.input.placeholder = "Random game";
    elements.entryLabel.textContent = "SEED (OPTIONAL)";
    elements.title.textContent = "Solve for a number.";
    elements.questionNumber.textContent = "READY";
    elements.seedCaption.textContent = "";
    elements.range.textContent = "Choose a seed or start a random game.";
    elements.answerCount.textContent = "";
    elements.clues.replaceChildren();
    elements.message.textContent = "Three lives. Three starting hints.";
    elements.action.textContent = "Start game";
    elements.action.disabled = false;
    restoreHintButton();
    elements.hint.disabled = true;
    updateStatus();
  }

  function shake(element) {
    element.classList.remove("is-shaking");
    void element.offsetWidth;
    element.classList.add("is-shaking");
    window.setTimeout(() => element.classList.remove("is-shaking"), 430);
  }

  function playTone(correct) {
    try {
      audioContext ||= new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = correct ? 620 : 180;
      gain.gain.setValueAtTime(0.07, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.18);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.18);
    } catch (_error) {
      // Audio can be unavailable until the browser receives a user gesture.
    }
  }

  document.querySelectorAll("[data-digit]").forEach((button) => {
    button.addEventListener("click", () => {
      if (elements.input.disabled) return;
      elements.input.value += button.dataset.digit;
      elements.input.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
  byId("keypad").addEventListener("click", (event) => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "clear") elements.input.value = "";
    if (action === "hint") requestHint();
  });
  elements.action.addEventListener("click", () => {
    if (game.gameOver) resetHome();
    else if (started) submitAnswer();
    else startGame();
  });
  elements.input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      started ? submitAnswer() : startGame();
    }
    if (event.key === "Escape") elements.input.value = "";
  });
  byId("settings-open").addEventListener("click", () => {
    updateSettings();
    elements.settingsDialog.showModal();
  });
  byId("save-game").addEventListener("click", (event) => {
    const button = event.currentTarget;
    saveGame();
    button.textContent = "Saved";
    window.setTimeout(() => { button.textContent = "Save game"; }, 1200);
  });
  byId("restart-game").addEventListener("click", () => {
    elements.settingsDialog.close();
    resetHome();
  });
  byId("skip-level").addEventListener("click", () => {
    if (!game.skipToNextLevel()) return;
    elements.settingsDialog.close();
    animateLevelUp(game.level);
    renderQuestion(game.nextQuestion());
    elements.message.textContent = `Skipped to level ${game.level}.`;
    saveGame();
  });
  byId("save-game").disabled = true;
  byId("continue-game").addEventListener("click", () => restoreGame());
  byId("new-game").addEventListener("click", () => localStorage.removeItem(SAVE_KEY));
  updateStatus();
  elements.hint.disabled = true;
  if (localStorage.getItem(SAVE_KEY)) elements.continueDialog.showModal();
})();