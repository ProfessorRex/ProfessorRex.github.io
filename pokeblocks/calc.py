import os

# POKEBLOCK COMBINATION CALCULATOR
#PROFESSOR REX twitch.tv/BrofessorsLab
berryParamsFilename = "SEED_PARAMS.txt"
berryData = [[0, 0, 0, 0, 0, 0]] #SPICY, DRY, SWEET, BITTER, SOUR, SMOOTHNESS
neutral_berry_list = [7, 8, 9, 10, 41, 42, 48, 50, 55]
berryNames = ["NONE"]
natures = ['Hardy', 'Lonely', 'Brave', 'Adamant', 'Naughty', 'Bold', 'Docile', 'Relaxed', 'Impish', 'Lax', 'Timid', 'Hasty', 'Serious', 'Jolly', 'Naive', 'Modest', 'Mild', 'Quiet', 'Bashful', 'Rash', 'Calm', 'Gentle', 'Sassy', 'Careful', 'Quirky']

cube_like_tbl = [
    [0,  0,  0,  0,  0],	
    [1,  0,  0,  0, -1], #1
    [1,  0, -1,  0,  0], #2 
    [1, -1,  0,  0,  0], #3
    [1,  0,  0, -1,  0], #4
    [-1,  0,  0,  0,  1], #5
    [0,  0,  0,  0,  0], #6
    [0,  0, -1,  0,  1], #7
    [0, -1,  0,  0,  1], #8
    [0,  0,  0, -1,  1],
    [-1,  0,  1,  0,  0],
    [0,  0,  1,  0, -1],
    [0,  0,  0,  0,  0],	
    [0, -1,  1,  0,  0],
    [0,  0,  1, -1,  0],
    [-1,  1,  0,  0,  0],
    [0,  1,  0,  0, -1],
    [0,  1, -1,  0,  0],
    [0,  0,  0,  0,  0],
    [0,  1,  0, -1,  0],	
    [-1,  0,  0,  1,  0],
    [0,  0,  0,  1, -1],
    [0,  0, -1,  1,  0],	
    [0, -1,  0,  1,  0],
    [0,  0,  0,  0,  0]]

def check_cube_like(nature, in_pokeblock):
    '''
    Function that takes in a Pokemon Nature (index) and a Pokeblock
    Returns 1 if Pokeblock is neutral
    2 if Pokeblock is liked
    3 if pokeblock is disliked 
    '''
    pokeblock = in_pokeblock[1]
    eat = 0
    for i in range(0, 5):
        plus = pokeblock[i]
        if plus > 0:
            eat += plus * cube_like_tbl[nature][i]
    if eat == 0:
        return 1
    elif eat > 0:
        return 2
    elif eat < 0:
        return 3

def find_all_plus_natures(pokeblock):
    '''
    returns a list of indexs of all natures that would like the given
    pokeblock
    '''
    liked_natures= []
    for i in range(1, 25):
        if check_cube_like(i, pokeblock) == 2:
            liked_natures.append(i)
    return liked_natures



def read_berry_data():
    '''
    Function to read berry data from text file
    Updates list berryData and berryNames globally
    '''
    global berryData
    global berryNames
    f = open(berryParamsFilename, "r")
    lines = f.readlines()
    f.close()
    i = 1
    while i < len(lines):
        line = lines[i].strip()
        berryNames.append(line)
        i += 1
        line = lines[i].strip()
        berryData.append([int(i) for i in line.split(", ")])
        i += 3


def berry_to_cube(berries):
    '''(list of ints -> Str
    Takes in the list of berry indexes of the berries being mixed
    returns the index number of the resulting pokeblock
    '''
    totalFlavor = [0, 0, 0, 0, 0, 0]    
    # If any duplicate berries are used create a black (12) Pokeblock
    if len(berries) != len(set(berries)):
        return ("Black", totalFlavor)
    mixBerryData = []
    # Get the stats of the berries being used
    for index in berries:
        mixBerryData += [berryData[index]]
    # Calculate the total flavors of the berry selection
    for berry in mixBerryData:
        for i in range(0, 6):
            totalFlavor[i] += berry[i]
    # Apply the flavor interaction table
    spicyHolder = totalFlavor[0]
    totalFlavor[0] -= totalFlavor[1] # Spicy - Dry
    totalFlavor[1] -= totalFlavor[2] # Dry - Sweet
    totalFlavor[2] -= totalFlavor[3] # Sweet - Bitter
    totalFlavor[3] -= totalFlavor[4] # Bitter - Sour
    totalFlavor[4] -= spicyHolder    # Sour - Spicy
    # Count the number of negative flavors and set them to 0
    minusCount = 0
    for i in range(0, 5):
        if totalFlavor[i] < 0:
            totalFlavor[i] = 0
            minusCount += 1
    # If there are 4 or more negative flavors return a Black (12) Pokeblock
    if minusCount >= 4:
        return("Black", totalFlavor)
    # Reduce Positive flavor strength by the number of negative flavors that exist 
    for i in range(0, 5):
        if totalFlavor[i] > 0:
            if(totalFlavor[i] < minusCount):
                totalFlavor[i] = 0 # Don't reduce below 0 (Though I don't think this ever happens)
                print('Guess it does happen')
            else:
                totalFlavor[i] -= minusCount
    # Calculate Feel
    totalFlavor[5] = totalFlavor[5]//len(berries) - len(berries)
    ''' CODE FOR ADJUSTING BASED ON BPM '''
    # If all flavors are 0 return a Black (12) Pokeblock
    if sum(totalFlavor[:5]) == 0:
        return("Black", totalFlavor)
    # Count the number of positive flavors
    plusCount = 0
    for flavor in totalFlavor[:5]:
        if flavor > 0:
            plusCount += 1
    # If there are 4 or more positive flavors return SIRO CUBE (White) (13)
    if plusCount >= 4:
        return("White", totalFlavor)
    # If there are exactly three positive flavors return HAIIRO_CUBE ("Grey") (12)
    if plusCount == 3:
        return("Grey", totalFlavor)
    # If any of the flavours surpass 50 return a Golden Pokeblock (KINIRO_CUBE) (14)
    #for flavor in totalFlavor[:5]:
        #if flavor > 50:
            #return("Gold", totalFlavor)
    # If there is only one positive flavor return a matching single-flavor pokeblock
    if plusCount == 1:
        if totalFlavor[0] > 0:
            return("Red", totalFlavor) # RED IF SPICY
        if totalFlavor[1] > 0:
            return("Blue", totalFlavor) # BLUE IF DRY
        if totalFlavor[2] > 0:
            return("Pink", totalFlavor) # PINK IF SWEET
        if totalFlavor[3] > 0:
            return("Green", totalFlavor) # GREEN IF BITTER
        if totalFlavor[4] > 0:
            return("Yellow", totalFlavor) # YELLOW IF SOUR
    # If there exactly two positive flavours return a pokeblock based on the larger of the two
    # Earlier index flavors take precedence for determining the colour
    if plusCount == 2:
        bestFlav = max(totalFlavor[:5])
        bestFlav = totalFlavor[:5].index(bestFlav)
        if bestFlav == 0:
            return("Purple", totalFlavor)
        if bestFlav == 1:
            return("Indigo", totalFlavor)
        if bestFlav == 2:
            return("Brown", totalFlavor)
        if bestFlav == 3:
            return("Light Blue", totalFlavor)
        if bestFlav == 4:
            return("Olive", totalFlavor)
    return("NONE")

def get_NPC_data(berry_index):
    npcBerries = [[4,3,2], [0, 4, 3], [1, 0, 4], [2, 1, 0], [3, 2, 1], [0, 2, 3], [1, 3, 4], [2, 4, 0], [3, 0, 1], [4, 1, 2]]
    if berry_index >= 44:
        return [43, 43, 43] # TO BE FIGURED OUT
    else:
        work = berry_index - 1
        if work >= 5:
            work = (work % 5) + 5
    return [i + 1 for i in npcBerries[work]]         

def test_two_berries():
    os.remove("Two_Player.txt")
    f = open("Two_Player.txt", "a")
    for i in range(1, len(berryData)):
        for j in range(i+1,len(berryData)):
            curr_cube = berry_to_cube([i,j])
            plus_natures = find_all_plus_natures(curr_cube)
            if 0 < len(plus_natures) <= 4:
                print (str(len(plus_natures)) + " natures @ " + str(i) + "," + str(j)) 
            f.write(berryNames[i] + " + " + berryNames[j] + " = " + curr_cube[0] + " Pokeblock\n")
            f.write("[" + str(i) + "," + str(j) + "] " + "Liking Natures: " + str(plus_natures) + "\n\n")
    f.close()

def test_three_berries():
    os.remove("Three_Player.txt")
    f = open("Three_Player.txt", "a")
    for i in range(1, len(berryData)):
        for j in range(i+1, len(berryData)):
            for k in range(j+1, len(berryData)):
                curr_cube = berry_to_cube([i,j,k])
                plus_natures = find_all_plus_natures(curr_cube)
                if 0 < len(plus_natures) <= 4:
                    print (str(len(plus_natures)) + " natures @ " + str(i) + "," + str(j) + "," + str(k))                 
                f.write(berryNames[i] + " + " + berryNames[j] +  " + " + berryNames[k] +" = " + curr_cube[0] + " Pokeblock\n")
                f.write("[" + str(i) + "," + str(j) + "," + str(k) + "] ""Liking Natures: " + str(find_all_plus_natures(curr_cube)) + "\n\n")
    f.close()

def test_four_berries():
    try:
        os.remove("Four_Player_Narrow.txt")
    except:
        pass
    f = open("Four_Player_Narrow.txt", "a")
    try:
        os.remove("Four_Player_Variants_Raw.txt")
    except:
        pass
    f2 = open("Four_Player_Variants_Raw.txt", "a")
    flavor_set = set()
    for i in range(1, len(berryData)):
        for j in range(i+1, len(berryData)):
            for k in range(j+1, len(berryData)):
                for l in range(k+1, len(berryData)):
                    curr_cube = berry_to_cube([i,j,k,l])
                    plus_natures = find_all_plus_natures(curr_cube)
                    len_flav = len(flavor_set)
                    flavor_set.add((curr_cube[0], tuple(plus_natures)))
                    if len(flavor_set) > len_flav and curr_cube[0] != "Black":
                        f2.write(str((curr_cube[0], tuple(plus_natures)))+", ")
                    if 0 < len(plus_natures) <= 3:
                        print (str(len(plus_natures)) + " natures @ " + str(i) + "," + str(j) + "," + str(k) + "," + str(l))
                    if curr_cube[0] != "Black":
                        f.write(berryNames[i] + " + " + berryNames[j] +  " + " + berryNames[k] + " + " + berryNames[l] + " = " + curr_cube[0] + " Pokeblock\n")
                        f.write("[" + str(i) + "," + str(j) + "," + str(k) + "," + str(l) + "] ""Liking Natures: " + str(find_all_plus_natures(curr_cube)) + "\n\n")
    f.close()
    f2.close()

def test_two_berries_csv():
    f = open("Two_Player.csv", "a")
    top_line = " ,"
    for berry in berryNames[1:]:
        top_line = top_line + berry +","
    top_line = top_line +"\n"
    f.write(top_line)
    for i in range(1, len(berryData) - 1):
        curr_line = berryNames[i] + ","
        for j in range(1,len(berryData) - 1):
            curr_line = curr_line + berry_to_cube([i,j])[0] + ","
        curr_line = curr_line + "\n"
        f.write(curr_line)
    f.close()

def test_fallorbor_berries():
    f = open("Fallorbor_Verdanturf.txt", "a")
    for i in range(1, len(berryData) - 12):
        npcBerries = get_NPC_data(i)
        f.write(berryNames[i] + "= " + berry_to_cube([i,npcBerries[0]])[0] + " Pokeblock\n")
    f.close()

def test_slateport_berries():
    f = open("Slateport.txt", "a")
    for i in range(1, len(berryData) - 12):
        npcBerries = get_NPC_data(i)
        f.write(berryNames[i] + "= " + berry_to_cube([i,npcBerries[0],npcBerries[1]])[0] + " Pokeblock\n")
    f.close()

def test_lilycove_berries():
    f = open("Lilycove.txt", "a")
    for i in range(1, len(berryData) - 12):
        npcBerries = get_NPC_data(i)
        f.write(berryNames[i] + "= " + berry_to_cube([i,npcBerries[0],npcBerries[1],npcBerries[2]])[0] + " Pokeblock\n")
    f.close()
    
def test_lilycove_berries_csv():
    f = open("Lilycove.csv", "a")
    top_line = "Player Berry, Mister's Berry, Laddie's Berry, Lassie's Berry, Pokeblock Colour, Spicyness, Dryness, Sweetness, Bitterness, Sourness, Feel\n"
    f.write(top_line)
    for i in range(1, len(berryData) - 12):
        npcBerries = get_NPC_data(i)
        cube = berry_to_cube([i,npcBerries[0],npcBerries[1],npcBerries[2]])
        f.write(berryNames[i] + "," + berryNames[npcBerries[0]] + "," + berryNames[npcBerries[1]] + "," + berryNames[npcBerries[2]] + "," + cube[0] +",")
        f.write(str(cube[1][0]) + "," + str(cube[1][1]) + "," + str(cube[1][2]) + "," + str(cube[1][3]) + "," + str(cube[1][4]) + "," + str(cube[1][5]) + "\n")
    f.close()

def test_slateport_berries_csv():
    f = open("Slateport.csv", "a")
    top_line = "Player Berry, Mister's Berry, Laddie's Berry, Pokeblock Colour, Spicyness, Dryness, Sweetness, Bitterness, Sourness, Feel\n"
    f.write(top_line)
    for i in range(1, len(berryData) - 12):
        npcBerries = get_NPC_data(i)
        cube = berry_to_cube([i,npcBerries[0],npcBerries[1]])
        f.write(berryNames[i] + "," + berryNames[npcBerries[0]] + "," + berryNames[npcBerries[1]] + "," + cube[0] +",")
        f.write(str(cube[1][0]) + "," + str(cube[1][1]) + "," + str(cube[1][2]) + "," + str(cube[1][3]) + "," + str(cube[1][4]) + "," + str(cube[1][5]) + "\n")
    f.close()

def test_Fallorbor_berries_csv():
    f = open("Fallorbor_Verdanturf.csv", "a")
    top_line = "Player Berry, Mister's Berry, Pokeblock Colour, Spicyness, Dryness, Sweetness, Bitterness, Sourness, Feel\n"
    f.write(top_line)
    for i in range(1, len(berryData) - 12):
        npcBerries = get_NPC_data(i)
        cube = berry_to_cube([i,npcBerries[0]])
        f.write(berryNames[i] + "," + berryNames[npcBerries[0]] + "," + cube[0] +",")
        f.write(str(cube[1][0]) + "," + str(cube[1][1]) + "," + str(cube[1][2]) + "," + str(cube[1][3]) + "," + str(cube[1][4]) + "," + str(cube[1][5]) + "\n")
    f.close()

def get_recepies(nats):
    ''' Gets all the recepies for pokeblock with liking nature list '''
    list2 = []
    for block in two_list:
        if block[1] == nats:
            list2.append(block)
    list3 = []
    for block in three_list:
        if block[1] == nats:
            list3.append(block)
    list4 = []
    for block in four_list:
        if block[1] == nats:
            list4.append(block)    
    return(list2, list3, list4)

def read_recepie_txt(player):
    ''' returns a list of all the recepies for given player numbers'''
    f = open(player + "_Player.txt", "r")
    lines = f.readlines()
    f.close()
    recepies = []
    for line in lines:
        if line[0] == "[":
            line = line.rstrip()
            rec = line[:line.find("]")+1].strip('][').split(',')
            rec = [int(x) for x in rec]
            nats = line[line.find(":")+2:].strip('][').split(', ')
            nats = [int(x) for x in nats if len(x) > 0]
            recepies.append([rec, nats])
    return recepies

def html_recepie(rec):
    line = ""
    for berry in rec:
        if len(line) != 0:
            line+=" + "
        line += berryNames[berry] + '<img src="../BERRIES/' + str(berry) +'.png">'
    line+="<br>"
    return line
     
def html_recepies(block):
    line = ""
    recs = get_recepies(block)
    ### TWO PLAYER
    line += "<h1> TWO PLAYER RECEPIES </h1><br>"
    for rec in recs[0]:
        line += html_recepie(rec[0])
    # THREE PLAYER
    line += "<h1> THREE PLAYER RECEPIES </h1><br>"
    for rec in recs[1]:
        p = 1
        for berry in rec[0]:
            if berry in neutral_berry_list:
                p=2
        if p == 1:
            line += html_recepie(rec[0])
    # FOUR PLAYER
    line += "<h1> FOUR PLAYER RECEPIES </h1><br>"
    for rec in recs[2]:
        p = 1
        for berry in rec[0]:
            if berry in neutral_berry_list:
                p=2
        if p == 1:
            line += html_recepie(rec[0])     
    return line

def read_variance_txt():
    f = open("VARIANCE.csv", "r")
    lines = f.readlines()
    f.close()
    blocks = []
    for block in lines:
        block = block.rstrip().split(', ')
        block[0] = block[0].replace("(","").replace(")","").split("/")[1:]
        block[0] = [int(x) for x in block[0]]
        blocks.append(block)
    return blocks

def get_variance(nats):
    for block in var_list:
        if block[0] == nats:
            return block[1:]

def write_var_html(block):
    line = ""
    line += "This Pokeblock is liked by: "
    for nat in block:
        line += natures[nat] + ", "
    line = line[:-2] + "<br>"
    variance = get_variance(block)
    line += "The <font color='green'>BEST</font> odds of a Pokeblock being neutral is: <font color='green'>" + str(variance[0]) +"%</font><br>"
    line += "The odds of a <font color='red'>Spicy</font> Pokeblock being neutral is: " + str(variance[1]) +"%<br>"
    line += "The odds of a <font color='red'>Spicy</font> Pokeblock being liked is: " + str(variance[2]) +"%<br>"
    line += "The odds of a <font color='red'>Spicy</font> Pokeblock being hated is: " + str(variance[3]) +"%<br>"
    
    line += "The odds of a <font color='yellow'>Sour</font> Pokeblock being neutral is: " + str(variance[4]) +"%<br>"
    line += "The odds of a <font color='yellow'>Sour</font> Pokeblock being liked is: " + str(variance[5]) +"%<br>"
    line += "The odds of a <font color='yellow'>Sour</font> Pokeblock being hated is: " + str(variance[6]) +"%<br>" 
    
    line += "The odds of a <font color='pink'>Sweet</font> Pokeblock being neutral is: " + str(variance[7]) +"%<br>"
    line += "The odds of a <font color='pink'>Sweet</font> Pokeblock being liked is: " + str(variance[8]) +"%<br>"
    line += "The odds of a <font color='pink'>Sweet</font> Pokeblock being hated is: " + str(variance[9]) +"%<br>" 
    
    line += "The odds of a <font color='blue'>Dry</font> Pokeblock being neutral is: " + str(variance[10]) +"%<br>"
    line += "The odds of a <font color='blue'>Dry</font> Pokeblock being liked is: " + str(variance[11]) +"%<br>"
    line += "The odds of a <font color='blue'>Dry</font> Pokeblock being hated is: " + str(variance[12]) +"%<br>"
    
    line += "The odds of a <font color='green'>Bitter</font> Pokeblock being neutral is: " + str(variance[13]) +"%<br>"
    line += "The odds of a <font color='green'>Bitter</font> Pokeblock being liked is: " + str(variance[14]) +"%<br>"
    line += "The odds of a <font color='green'>Bitter</font> Pokeblock being hated is: " + str(variance[15]) +"%<br>"     
    return line

def write_page(nats):
    name=""
    for nat in nats:
        name += str(nat) + "_"
    try:
        os.remove("WEBPAGES/BLOCKS/" + name[:-1]+".html")
    except:
        pass
    f = open("WEBPAGES/BLOCKS/" + name[:-1]+".html", "a")
    f.write('<body bgcolor="black"><span style="color: white">')    
    f.write(write_var_html(nats))
    f.write(html_recepies(nats))
    
def write_pages():
    for block in var_list:
        write_page(block[0])

def write_main_page():
    f = open("LISTED_IN_ORDER.txt", "r")
    lines = f.readlines()
    f.close()
    output = ""
    count = 0
    for line in lines:
        count +=1
        line = line.rstrip()
        color = line[2:line[2:].find("'")+2]
        url = line[line.find("/")+2:line.find(")")].replace("/","_")
        output += "<a href='WEBPAGES/BLOCKS/" + url + ".html'>" + "0"*(3-len(str(count))) + str(count) + ":</a> " + "<font color='" + color + "'>" + color + " Pokéblock, liked by " + str(line.count("/")) + " natures. Best Neutral Rate: " + line[line.find(",")+1:] + "% <a href='WEBPAGES/BLOCKS/" + url + ".html'>LINK</a><br>"
    return output

if __name__ == '__main__':
    two_list = read_recepie_txt("Two")
    three_list = read_recepie_txt("Three")
    four_list = read_recepie_txt("Four")
    var_list = read_variance_txt()
    read_berry_data()
    #test_two_berries()
    #test_three_berries()
    #test_four_berries()