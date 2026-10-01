(() => {
  const FUTURE_QUESTION_LIMIT = 10;
  const MAXIMUMS = [100, 100, 1000, 1000, 10000, 10000, 10000];
  const MINIMUMS = [0, 0, 10, 10, 100, 1000, 1000];
  const LEVEL_THRESHOLDS = [0, 50, 200, 600, 1500, 3000];
  const BAN_LETTERS = ["a", "e", "i", "o", "t", "u"];
  const SMALL_NUMBERS = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen",
  ];
  const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const RULES = [
    ["EVEN", 1], ["ODD", 1], ["DIGIT_SUM", 1], ["CYCLOPS", 3],
    ["INCREASING", 1], ["NUDE", 2], ["DECREASING", 1], ["EVENISH", 1],
    ["ODDISH", 1], ["BAN", 1], ["PRIME", 2], ["COMPOSITE", 2],
    ["ALTERNATING", 2], ["UNDULATING", 2], ["PALINDROME", 2],
    ["TWIN_PRIME", 2], ["DIGIT_PRODUCT", 2], ["NON_TRIVIAL_ALTERNATING", 3],
    ["NON_TRIVIAL_UNDULATING", 3], ["SEMIPRIME", 3], ["INTERPRIME", 3],
    ["NON_TRIVIAL_PALINDROME", 3], ["STRICTLY_DECREASING", 3],
    ["STRICTLY_INCREASING", 3], ["NIVEN", 4], ["NARCISSISTIC", 4],
    ["EMIRP", 4], ["EMIRPIMES", 4], ["EMIRPRETNI", 4], ["MORAN", 5],
  ].map(([id, level]) => ({ id, level }));
  const RULE_LEVEL = Object.fromEntries(RULES.map((rule) => [rule.id, rule.level]));
  const RULE_COPY = {
    CYCLOPS: ["Cyclops number", "A number with exactly one zero digit, positioned in the middle. Examples: 0, 102, 505, 81047."],
    INCREASING: ["Increasing number", "Each digit is greater than or equal to its predecessor, reading left to right. Examples: 9, 77, 223."],
    NUDE: ["Nude number", "A number evenly divisible by every one of its digits. A number containing 0 does not qualify."],
    DECREASING: ["Decreasing number", "Each digit is less than or equal to its predecessor, reading left to right. Examples: 6, 333, 322."],
    PRIME: ["Prime number", "A number greater than 1 with exactly two positive divisors: 1 and itself. For example, 13."],
    COMPOSITE: ["Composite number", "An integer greater than 1 that is not prime; it can be written as a product of primes. For example, 22 = 2 x 11."],
    ALTERNATING: ["Alternating number", "The parity of each digit switches between even and odd from left to right. Single-digit numbers are alternating."],
    UNDULATING: ["Undulating number", "The digits repeat the pattern ABABAB...; A and B may be equal. Single-digit numbers are undulating."],
    PALINDROME: ["Palindrome", "The number reads the same forwards and backwards. Single-digit numbers are palindromes."],
    TWIN_PRIME: ["Twin-prime number", "A prime with another prime exactly 2 away. For example, 17 and 19 form a twin-prime pair."],
    NON_TRIVIAL_ALTERNATING: ["Non-trivial alternating number", "An alternating number with at least two digits."],
    NON_TRIVIAL_UNDULATING: ["Non-trivial undulating number", "An undulating number with at least three digits and different repeating digits A and B."],
    SEMIPRIME: ["Semiprime number", "A number whose prime factorization contains exactly two prime factors, counted with multiplicity. Examples: 4 = 2 x 2; 247 = 13 x 19."],
    INTERPRIME: ["Interprime number", "A composite number equally distant from the nearest prime below and above it. For example, 12 is between 11 and 13."],
    NON_TRIVIAL_PALINDROME: ["Non-trivial palindrome", "A palindrome with at least two digits."],
    STRICTLY_DECREASING: ["Strictly decreasing number", "Each digit is less than its predecessor, reading left to right. Examples: 6, 321."],
    STRICTLY_INCREASING: ["Strictly increasing number", "Each digit is greater than its predecessor, reading left to right. Examples: 9, 158."],
    NIVEN: ["Niven (Harshad) number", "A number evenly divisible by its digit sum. For example, 133 has digit sum 7 and is divisible by 7."],
    NARCISSISTIC: ["Narcissistic (Armstrong) number", "A number equal to the sum of each digit raised to the number of digits. For example, 370 = 3^3 + 7^3 + 0^3."],
    EMIRP: ["Emirp", "A prime which becomes a different prime when its digits are reversed. For example, 13 reverses to 31; 11 is not an emirp."],
    EMIRPIMES: ["Emirpimes number", "A semiprime which becomes a different semiprime when its digits are reversed. For example, 15 reverses to 51."],
    EMIRPRETNI: ["Emirpretni number", "An interprime whose reversed digits form a different interprime. Numbers ending in 0 cannot qualify."],
    MORAN: ["Moran number", "A Niven number whose quotient when divided by its digit sum is prime. For example, 18 / 9 = 2."],
  };

  class JavaRandom {
    constructor(seed) {
      this.state = (BigInt.asUintN(64, BigInt(seed)) ^ 0x5deece66dn) & ((1n << 48n) - 1n);
    }

    next(bits) {
      this.state = (this.state * 0x5deece66dn + 0xbn) & ((1n << 48n) - 1n);
      return Number(this.state >> BigInt(48 - bits));
    }

    nextInt(bound) {
      if (bound <= 0) throw new RangeError("bound must be positive");
      if ((bound & -bound) === bound) return Math.floor((bound * this.next(31)) / 0x80000000);
      while (true) {
        const bits = this.next(31);
        const value = bits % bound;
        if (((bits - value + bound - 1) | 0) >= 0) return value;
      }
    }
  }

  const digitSum = (number) => String(number).split("").reduce((sum, digit) => sum + Number(digit), 0);
  const digitProduct = (number) => String(number).split("").reduce((product, digit) => product * Number(digit), 1);

  function numberToEnglish(number) {
    if (number < 20) return SMALL_NUMBERS[number];
    if (number < 100) {
      const tens = Math.floor(number / 10);
      const units = number % 10;
      return TENS[tens] + (units === 0 ? "" : ` ${SMALL_NUMBERS[units]}`);
    }
    if (number < 1000) {
      const hundreds = Math.floor(number / 100);
      const remainder = number % 100;
      return `${SMALL_NUMBERS[hundreds]} hundred${remainder === 0 ? "" : ` ${numberToEnglish(remainder)}`}`;
    }
    const thousands = Math.floor(number / 1000);
    const remainder = number % 1000;
    return `${numberToEnglish(thousands)} thousand${remainder === 0 ? "" : ` ${numberToEnglish(remainder)}`}`;
  }

  function isPrime(number) {
    if (number < 2) return false;
    if (number % 2 === 0) return number === 2;
    for (let factor = 3; factor * factor <= number; factor += 2) {
      if (number % factor === 0) return false;
    }
    return true;
  }

  function isSemiprime(number) {
    if (number < 4) return false;
    let remaining = number;
    let factorCount = 0;
    for (let factor = 2; factor * factor <= remaining; factor += 1) {
      while (remaining % factor === 0) {
        remaining /= factor;
        factorCount += 1;
        if (factorCount > 2) return false;
      }
    }
    if (remaining > 1) factorCount += 1;
    return factorCount === 2;
  }

  function isInterprime(number) {
    if (number <= 1 || isPrime(number)) return false;
    let lower = number - 1;
    while (lower > 1 && !isPrime(lower)) lower -= 1;
    let upper = number + 1;
    while (!isPrime(upper)) upper += 1;
    return number - lower === upper - number;
  }

  function reverseNumber(number) {
    return Number(String(number).split("").reverse().join(""));
  }

  function isCyclops(number) {
    if (number === 0) return true;
    const digits = String(number);
    if (digits.length % 2 === 0) return false;
    let zeroCount = 0;
    for (let index = 0; index < digits.length; index += 1) {
      if (digits[index] === "0") {
        zeroCount += 1;
        if (index !== Math.floor(digits.length / 2)) return false;
      }
    }
    return zeroCount === 1;
  }

  function isNude(number) {
    if (number === 0) return false;
    let remaining = number;
    while (remaining > 0) {
      const digit = remaining % 10;
      if (digit === 0 || number % digit !== 0) return false;
      remaining = Math.floor(remaining / 10);
    }
    return true;
  }

  function isMonotonic(number, increasing, strict) {
    const digits = String(number);
    for (let index = 1; index < digits.length; index += 1) {
      const previous = Number(digits[index - 1]);
      const current = Number(digits[index]);
      if (increasing) {
        if (strict ? current <= previous : current < previous) return false;
      } else if (strict ? current >= previous : current > previous) {
        return false;
      }
    }
    return true;
  }

  function isAlternating(number) {
    const digits = String(number);
    for (let index = 1; index < digits.length; index += 1) {
      if ((Number(digits[index]) & 1) === (Number(digits[index - 1]) & 1)) return false;
    }
    return true;
  }

  function isUndulating(number) {
    const digits = String(number);
    if (digits.length < 3) return true;
    for (let index = 2; index < digits.length; index += 1) {
      if (digits[index] !== digits[index % 2]) return false;
    }
    return true;
  }

  function isNarcissistic(number) {
    const digits = String(number);
    return [...digits].reduce((total, digit) => total + Number(digit) ** digits.length, 0) === number;
  }

  function matches(rule, number, parameter = 0) {
    switch (rule) {
      case "EVEN": return number % 2 === 0;
      case "ODD": return number % 2 !== 0;
      case "DIGIT_SUM": return digitSum(number) === parameter;
      case "CYCLOPS": return isCyclops(number);
      case "INCREASING": return isMonotonic(number, true, false);
      case "NUDE": return isNude(number);
      case "DECREASING": return isMonotonic(number, false, false);
      case "EVENISH": return digitSum(number) % 2 === 0;
      case "ODDISH": return digitSum(number) % 2 !== 0;
      case "BAN": return !numberToEnglish(number).includes(String.fromCharCode(parameter));
      case "PRIME": return isPrime(number);
      case "COMPOSITE": return number > 1 && !isPrime(number);
      case "ALTERNATING": return isAlternating(number);
      case "UNDULATING": return isUndulating(number);
      case "PALINDROME": return String(number) === String(number).split("").reverse().join("");
      case "TWIN_PRIME": return isPrime(number) && (isPrime(number - 2) || isPrime(number + 2));
      case "DIGIT_PRODUCT": return digitProduct(number) === parameter;
      case "NON_TRIVIAL_ALTERNATING": return number >= 10 && isAlternating(number);
      case "NON_TRIVIAL_UNDULATING": return number >= 101 && String(number)[0] !== String(number)[1] && isUndulating(number);
      case "SEMIPRIME": return isSemiprime(number);
      case "INTERPRIME": return isInterprime(number);
      case "NON_TRIVIAL_PALINDROME": return number >= 10 && String(number) === String(number).split("").reverse().join("");
      case "STRICTLY_DECREASING": return isMonotonic(number, false, true);
      case "STRICTLY_INCREASING": return isMonotonic(number, true, true);
      case "NIVEN": return number > 0 && number % digitSum(number) === 0;
      case "NARCISSISTIC": return isNarcissistic(number);
      case "EMIRP": return reverseNumber(number) !== number && isPrime(number) && isPrime(reverseNumber(number));
      case "EMIRPIMES": return reverseNumber(number) !== number && isSemiprime(number) && isSemiprime(reverseNumber(number));
      case "EMIRPRETNI": return number % 10 !== 0 && reverseNumber(number) !== number && isInterprime(number) && isInterprime(reverseNumber(number));
      case "MORAN": return number !== 0 && number % digitSum(number) === 0 && isPrime(number / digitSum(number));
      default: return false;
    }
  }

  function makeClue(rule, parameter, random) {
    switch (rule) {
      case "EVEN": return random.nextInt(4) === 0
        ? { text: "X is not an odd number", title: "Odd number", explanation: "An odd number is not evenly divisible by 2. Examples: 1, 7, 13, 91, 999." }
        : { text: "X is an Even Number", title: "Even number", explanation: "A number evenly divisible by 2. Examples: 0, 2, 10, 108, 784." };
      case "ODD": return random.nextInt(4) === 0
        ? { text: "X is not an even number", title: "Even number", explanation: "An even number is evenly divisible by 2. Examples: 0, 2, 10, 108, 784." }
        : { text: "X is an Odd Number", title: "Odd number", explanation: "A number not evenly divisible by 2. Examples: 1, 7, 13, 91, 999." };
      case "DIGIT_SUM": return { text: `The sum of X's digits is ${parameter}`, title: "Digit sum", explanation: "Add the number's individual digits. For example, 763 has digit sum 7 + 6 + 3 = 16." };
      case "DIGIT_PRODUCT": return { text: `The product of X's digits is ${parameter}`, title: "Digit product", explanation: "Multiply the number's individual digits. For example, 721 has digit product 7 x 2 x 1 = 14." };
      case "BAN": {
        const letter = String.fromCharCode(parameter);
        const article = "tu".includes(letter) ? "a " : "an ";
        let explanation = `The English spelling of the number contains no letter '${letter}'.`;
        if (letter === "a") explanation += " Ignore the word 'and'.";
        return { text: `X is ${article}${letter}ban number in English`, title: `${letter}ban number`, explanation };
      }
      case "EVENISH": return { text: "X is an evenish number", title: "Evenish number", explanation: "The sum of the number's digits is even. For example, 42 has digit sum 6." };
      case "ODDISH": return { text: "X is an oddish number", title: "Oddish number", explanation: "The sum of the number's digits is odd. For example, 300 has digit sum 3." };
      default: {
        const [title, explanation] = RULE_COPY[rule] || [rule, rule];
        const texts = {
          CYCLOPS: "X is a cyclops number", INCREASING: "X is an increasing number",
          NUDE: "X is a nude number", DECREASING: "X is a decreasing Number",
          PRIME: "X is a prime number", COMPOSITE: "X is a composite number",
          ALTERNATING: "X is an alternating number", UNDULATING: "X is an undulating number",
          PALINDROME: "X is a palindrome", TWIN_PRIME: "X is a twin prime number",
          NON_TRIVIAL_ALTERNATING: "X is a non-trivial alternating number",
          NON_TRIVIAL_UNDULATING: "X is a non-trivial undulating number",
          SEMIPRIME: "X is a semiprime number", INTERPRIME: "X is an interprime number",
          NON_TRIVIAL_PALINDROME: "X is a non-trivial palindrome",
          STRICTLY_DECREASING: "X is a strictly decreasing number",
          STRICTLY_INCREASING: "X is a strictly increasing number",
          NIVEN: "X is a niven (Harshad) number", NARCISSISTIC: "X is a narcissistic (Armstrong) number",
          EMIRP: "X is an emirp", EMIRPIMES: "X is an emirpimes number",
          EMIRPRETNI: "X is an emirpretni number", MORAN: "X is a Moran number",
        };
        return { text: texts[rule], title, explanation };
      }
    }
  }

  function chooseWeighted(pool, random, level) {
    const weight = (rule) => rule.id === "DIGIT_SUM" || rule.id === "DIGIT_PRODUCT"
      ? (level <= 2 ? 6 : 3) : 1;
    const total = pool.reduce((sum, rule) => sum + weight(rule), 0);
    let choice = random.nextInt(total);
    for (const rule of pool) {
      choice -= weight(rule);
      if (choice < 0) return rule;
    }
    return pool[pool.length - 1];
  }

  function sampleRules(unlocked, random, requireDigitHint, level) {
    const pool = unlocked.slice();
    const selected = [];
    if (requireDigitHint) {
      const arithmetic = pool.filter((rule) => rule.id === "DIGIT_SUM" || rule.id === "DIGIT_PRODUCT");
      const picked = chooseWeighted(arithmetic, random, level);
      selected.push(picked);
      pool.splice(pool.indexOf(picked), 1);
    } else {
      for (const id of ["DIGIT_SUM", "DIGIT_PRODUCT"]) {
        const index = pool.findIndex((rule) => rule.id === id);
        if (index !== -1) pool.splice(index, 1);
      }
    }
    while (selected.length < 3) {
      const picked = chooseWeighted(pool, random, level);
      selected.push(picked);
      pool.splice(pool.indexOf(picked), 1);
    }
    return selected;
  }

  function hasExclusion(selected) {
    const ids = new Set(selected.map((rule) => rule.id));
    const pairs = [
      ["EVEN", "ODD"], ["EVENISH", "ODDISH"], ["DIGIT_SUM", "EVENISH"],
      ["DIGIT_SUM", "ODDISH"], ["INCREASING", "STRICTLY_INCREASING"],
      ["DECREASING", "STRICTLY_DECREASING"], ["ALTERNATING", "NON_TRIVIAL_ALTERNATING"],
      ["UNDULATING", "NON_TRIVIAL_UNDULATING"], ["PALINDROME", "NON_TRIVIAL_PALINDROME"],
      ["NIVEN", "MORAN"], ["PRIME", "EMIRP"], ["PRIME", "TWIN_PRIME"],
      ["SEMIPRIME", "EMIRPIMES"], ["INTERPRIME", "EMIRPRETNI"],
      ["COMPOSITE", "DIGIT_PRODUCT"],
    ];
    if (pairs.some(([first, second]) => ids.has(first) && ids.has(second))) return true;
    const primeFamily = ["PRIME", "EMIRP", "TWIN_PRIME"];
    const compositeFamily = ["SEMIPRIME", "EMIRPIMES", "INTERPRIME", "EMIRPRETNI"];
    return primeFamily.some((rule) => ids.has(rule)) && compositeFamily.some((rule) => ids.has(rule));
  }

  function createQuestion(level, history, random, requireDigitHint) {
    const unlocked = RULES.filter((rule) => rule.level <= level);
    for (let attempts = 0; attempts < 10000; attempts += 1) {
      const maximum = MAXIMUMS[random.nextInt(level + 1)];
      const validMinimums = MINIMUMS.slice(0, level + 1).filter((minimum) => minimum < maximum);
      const minimum = validMinimums[random.nextInt(validMinimums.length)];
      const selected = sampleRules(unlocked, random, requireDigitHint, level);
      if (hasExclusion(selected)) continue;

      let possible = Array.from({ length: maximum - minimum + 1 }, (_, index) => minimum + index);
      const parameters = {};
      let valid = true;
      for (const { id } of selected) {
        if (id === "DIGIT_SUM" || id === "DIGIT_PRODUCT") continue;
        let parameter = 0;
        if (id === "BAN") {
          const available = BAN_LETTERS.filter((letter) => possible.some((candidate) => !numberToEnglish(candidate).includes(letter)));
          if (available.length === 0) { valid = false; break; }
          parameter = available[random.nextInt(available.length)].charCodeAt(0);
        }
        parameters[id] = parameter;
        possible = possible.filter((number) => matches(id, number, parameter));
        if (possible.length === 0) { valid = false; break; }
      }
      if (!valid) continue;

      const arithmeticRules = selected.filter(({ id }) => id === "DIGIT_SUM" || id === "DIGIT_PRODUCT");
      if (arithmeticRules.length > 0) {
        const answer = possible[random.nextInt(possible.length)];
        for (const { id } of arithmeticRules) {
          parameters[id] = id === "DIGIT_SUM" ? digitSum(answer) : digitProduct(answer);
          possible = possible.filter((number) => matches(id, number, parameters[id]));
        }
        if (possible.length === 0) continue;
      }

      const clues = selected.map(({ id }) => makeClue(id, parameters[id] || 0, random));
      const signature = `${level}:${minimum}:${maximum}${clues.map(({ text }) => `|${text}`).join("")}`;
      if (history.has(signature)) continue;
      return {
        clues,
        minimum,
        maximum,
        solutions: possible,
        rules: selected.map(({ id }) => id),
        parameters: selected.map(({ id }) => parameters[id] || 0),
        signature,
      };
    }
    throw new Error("Unable to generate a new question.");
  }

  class Game {
    constructor() {
      this.reset();
    }

    reset() {
      this.level = 1;
      this.lives = 3;
      this.points = 0;
      this.questionsAnswered = 0;
      this.questionNumber = 0;
      this.generatedQuestionCount = 0;
      this.hintsAvailable = 3;
      this.hintUsed = false;
      this.debugMode = false;
      this.randomSeed = true;
      this.seed = 0n;
      this.random = new JavaRandom(0n);
      this.queue = [];
      this.seen = new Set();
      this.current = null;
      this.questionStartedAt = 0;
      this.running = false;
      this.gameOver = false;
    }

    start(seedText = "") {
      this.reset();
      const seed = seedText.trim();
      this.randomSeed = seed.length === 0;
      if (seed && !/^-?\d+$/.test(seed)) throw new Error("Seed must be a whole number.");
      this.seed = this.randomSeed
        ? BigInt(Date.now()) ^ BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))
        : BigInt(seed);
      if (this.seed < -(1n << 63n) || this.seed > (1n << 63n) - 1n) {
        throw new Error("Seed must fit in a signed 64-bit integer.");
      }
      this.debugMode = seed === "0118999";
      this.random = new JavaRandom(this.seed);
      this.running = true;
      this.current = this.generateUniqueQuestion();
      this.deliver(this.current);
      this.fillQueue();
    }

    generateUniqueQuestion() {
      while (true) {
        const question = createQuestion(this.level, this.seen, this.random,
          this.generatedQuestionCount % 2 === 0);
        if (this.seen.has(question.signature)) continue;
        this.seen.add(question.signature);
        this.generatedQuestionCount += 1;
        return question;
      }
    }

    fillQueue() {
      while (this.queue.length < FUTURE_QUESTION_LIMIT) {
        this.queue.push(this.generateUniqueQuestion());
      }
    }

    deliver(question) {
      this.current = question;
      this.questionNumber += 1;
      this.hintUsed = false;
      this.questionStartedAt = Date.now();
    }

    nextQuestion() {
      if (!this.running || this.gameOver) return null;
      if (this.queue.length === 0) this.queue.push(this.generateUniqueQuestion());
      this.deliver(this.queue.shift());
      this.fillQueue();
      return this.current;
    }

    requestHint() {
      if (!this.running || !this.current || this.gameOver) return { unavailable: true };
      if (this.hintUsed) return { alreadyUsed: true };
      if (this.hintsAvailable <= 0) return { unavailable: true };

      const random = new JavaRandom(this.seed);
      for (let step = 0; step < this.questionNumber; step += 1) random.next(32);
      const answer = this.current.solutions[random.nextInt(this.current.solutions.length)];
      const hasArithmetic = this.current.rules.includes("DIGIT_SUM") || this.current.rules.includes("DIGIT_PRODUCT");
      const candidates = RULES.filter(({ id, level }) => {
        if (level > this.level || this.current.rules.includes(id)) return false;
        const arithmetic = id === "DIGIT_SUM" || id === "DIGIT_PRODUCT";
        if ((hasArithmetic && arithmetic) || (!hasArithmetic && !arithmetic)) return false;
        if (!arithmetic && !matches(id, answer, 0)) return false;
        if (id === "BAN" && !BAN_LETTERS.some((letter) => !numberToEnglish(answer).includes(letter))) return false;
        return true;
      });
      if (candidates.length === 0) return { unavailable: true };

      const { id } = candidates[random.nextInt(candidates.length)];
      let parameter = id === "DIGIT_SUM" ? digitSum(answer)
        : id === "DIGIT_PRODUCT" ? digitProduct(answer) : 0;
      if (id === "BAN") {
        const absentLetters = BAN_LETTERS.filter((letter) => !numberToEnglish(answer).includes(letter));
        parameter = absentLetters[random.nextInt(absentLetters.length)].charCodeAt(0);
      }
      const solutions = this.current.solutions.filter((number) => matches(id, number, parameter));
      if (solutions.length === 0) return { unavailable: true };
      const clue = makeClue(id, parameter, random);
      this.current = {
        ...this.current,
        clues: [...this.current.clues, clue],
        rules: [...this.current.rules, id],
        parameters: [...this.current.parameters, parameter],
        solutions,
        signature: `${this.current.signature}|hint:${clue.text}`,
      };
      this.hintUsed = true;
      this.hintsAvailable -= 1;
      return { question: this.current, hintsRemaining: this.hintsAvailable };
    }

    skipToNextLevel() {
      if (!this.running || !this.debugMode || this.level >= 6) return false;
      this.level += 1;
      this.lives += 1;
      this.hintsAvailable += 1;
      this.current = null;
      this.generatedQuestionCount -= this.queue.length;
      this.queue = [];
      return true;
    }

    submit(answerText) {
      if (!/^-?\d+$/.test(answerText.trim())) return { status: "INVALID", pointsEarned: 0 };
      const guess = Number(answerText.trim());
      if (!Number.isInteger(guess)) return { status: "INVALID", pointsEarned: 0 };
      if (!this.running || !this.current) return { status: "INVALID", pointsEarned: 0 };
      if (!this.current.solutions.includes(guess)) {
        const clueMatches = this.current.rules.map((rule, index) => matches(rule, guess, this.current.parameters[index]));
        this.lives -= 1;
        if (this.lives <= 0) {
          const correctAnswer = this.current.solutions[0];
          this.running = false;
          this.gameOver = true;
          this.current = null;
          this.queue = [];
          return {
            status: "GAME_OVER", pointsEarned: 0, totalPoints: this.points,
            correctAnswer, clueMatches,
          };
        }
        return { status: "WRONG", pointsEarned: 0, clueMatches };
      }

      const elapsedSeconds = (Date.now() - this.questionStartedAt) / 1000;
      let earned = this.calculatePoints(guess, elapsedSeconds);
      const speedBonus = elapsedSeconds < (this.level + 1) ** 2;
      const biggestAnswerBonus = this.current.solutions.length > 1
        && guess === Math.max(...this.current.solutions);
      if (biggestAnswerBonus) earned = Math.floor((earned * 3 + 1) / 2);
      if (speedBonus) earned *= 2;
      const specialBonusPoints = guess === 67 ? 67 : guess === 69 ? 69 : guess === 420 ? 100 : 0;
      const specialBonusLabel = guess === 67 ? "67 BONUS" : guess === 69 ? "NICE" : guess === 420 ? "🔥" : null;
      earned += specialBonusPoints;
      this.points += earned;
      this.questionsAnswered += 1;
      this.current = null;
      const levelUp = this.level < 6 && this.points >= LEVEL_THRESHOLDS[this.level];
      if (levelUp) {
        this.level += 1;
        this.lives += 1;
        this.hintsAvailable += 1;
        this.generatedQuestionCount -= this.queue.length;
        this.queue = [];
      }
      return {
        status: "CORRECT", pointsEarned: earned, totalPoints: this.points,
        level: this.level, levelUp, speedBonus, biggestAnswerBonus,
        specialBonusLabel, specialBonusPoints,
      };
    }

    calculatePoints(answer, seconds) {
      const levels = this.current.rules.map((rule) => RULE_LEVEL[rule]).sort((a, b) => b - a);
      let ruleValue = 1;
      for (let index = 0; index < levels.length; index += 1) {
        const factor = levels[index] * (levels.length - index) / levels.length;
        ruleValue *= Math.max(1, factor);
      }
      const timeModifier = seconds <= 5 ? 3 : Math.max(0.5,
        Math.min(0.97 ** (seconds - 5) + 1, 0.99 ** (seconds - 77)));
      const count = this.current.solutions.length;
      const solutionsModifier = count === 1 ? 3 : count === 2 ? 2 : 1 + 1 / Math.sqrt(count);
      const answerModifier = Math.max(1, Math.min(answer ** 0.25, answer / 216 + 1));
      return 2 * Math.ceil(answerModifier * ruleValue * timeModifier * solutionsModifier);
    }

    snapshot() {
      return {
        level: this.level, lives: this.lives, points: this.points,
        questionsAnswered: this.questionsAnswered, questionNumber: this.questionNumber,
        generatedQuestionCount: this.generatedQuestionCount, hintsAvailable: this.hintsAvailable,
        hintUsed: this.hintUsed, debugMode: this.debugMode, randomSeed: this.randomSeed,
        seed: this.seed.toString(), randomState: this.random.state.toString(),
        queue: this.queue, seen: [...this.seen], current: this.current,
        running: this.running, gameOver: this.gameOver,
        elapsed: this.current ? Date.now() - this.questionStartedAt : 0,
      };
    }

    restore(snapshot) {
      Object.assign(this, snapshot);
      this.seed = BigInt(snapshot.seed);
      this.random = new JavaRandom(this.seed);
      this.random.state = BigInt(snapshot.randomState);
      this.seen = new Set(snapshot.seen);
      this.questionStartedAt = Date.now() - snapshot.elapsed;
      this.running = snapshot.running;
      this.gameOver = snapshot.gameOver;
    }
  }

  window.NumberGame = { Game, JavaRandom, createQuestion, makeClue, matches };
})();