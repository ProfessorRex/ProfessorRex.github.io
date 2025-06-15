def natures_per_ShPID():
    ''' Used to generate a list of the nature spreads for each ShPID '''
    lst = [[0 for _ in range(25)] for _ in range(65536)]
    for PID in range(0, 4_294_967_296):
        PID1 = int(PID/65536)
        PID2 = PID % 65536
        nature = PID % 25
        ShPID = PID1 ^ PID2
        lst[ShPID][nature] += 1
        if(PID%1000000)==0:
            print(PID)
    return lst

def natures_per_ShPID_By_Gender(ratio="1:1"):
    ''' Used to generate a list of the nature spreads for each ShPID '''
    lstF = [[0 for _ in range(25)] for _ in range(65536)]
    lstM = [[0 for _ in range(25)] for _ in range(65536)]
    for PID in range(0, 4_294_967_296):
        PID1 = int(PID/65536)
        PID2 = PID % 65536
        nature = PID % 25
        ShPID = PID1 ^ PID2
        g = PID_2_Gender(PID, ratio)
        if g == "M":
            lstM[ShPID][nature] += 1
        else:
            lstF[ShPID][nature] += 1
        if(PID%1000000)==0:
            print(PID)
    return (lstM, lstF)

def PID_2_Gender(PID, ratio):
    PIDb = bin(PID)
    PIDb = 10*'0' + PIDb[2:]
    PIDg = PIDb[-8:]
    PIDg = int(PIDg, 2)
    if ratio == "7:1":
        rm = 30
    elif ratio == "3:1":
        rm = 63
    elif ratio == "1:1":
        rm = 126
    else:
        rm = 190
    if PIDg <= rm:
        return "F"
    else:
        return "M"

def get_ShPID_results():
    results = natures_per_ShPID()
    f = open("ShPID.txt", "a")
    for result in results:
        f.write(str(result)+"\n")
    f.close()
    print("DONE")
    
def get_gShPID_results(fname="shPID",ratio="1:1"):
    results = natures_per_ShPID_By_Gender(ratio)
    for i in (0,1):
        if i == 0:
            f = open(fname + "M.txt", "a")
        else:
            f = open(fname + "F.txt", "a")
        for result in results[i]:
            f.write(str(result)+"\n")
    f.close()
    print("DONE")

def read_ShPID_results():
    f = open("ShPID.txt", "r")
    lines = f.readlines()
    # Strips the newline character
    lines_stripped = []
    for line in lines:
        curr = list(line.strip().strip('][').split(', '))
        curr = [ int(x) for x in curr]
        lines_stripped.append(curr)
    return lines_stripped

def natures_per_ShTID():
    '''
    Returns a list of ShTIDs (grouped into sets of 8) with a breakdown
    of how many PIDs they get of each nature
    '''
    lst = [[0 for _ in range(25)] for _ in range(8192)]
    ShPID_natures = read_ShPID_results()
    for ShTID in range(0, 65536, 8):
        lst[ShTID//8].append(str(ShTID) + " -> " + str(ShTID + 7))
        for ShPID in range(ShTID, ShTID + 8):
            for i in range(0, 25):
                lst[ShTID//8][i] += ShPID_natures[ShPID][i]
    return lst

def get_ShTID_results():
    results = natures_per_ShTID()
    f = open("ShTID.txt", "a")
    for result in results:
        f.write(str(result)+"\n")
    f.close()
    print("DONE")

total_per_nature = [171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798691, 171798691, 171798691, 171798691]
nature_names=["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"]

def get_effective_rates(num_pids, natureID):
    #def total PIDS
    total_pids=total_per_nature[natureID]
    sync_rate = total_pids/num_pids
    #print("1/" + str(total_pids/num_pids))
    total_rate = (sync_rate + 8192)/2
    return [sync_rate, total_rate]

import shutil
def write_charts():
    lst = natures_per_ShTID()
    for ShTID_index in range(8192):
        shutil.copy2('template.html', 'charts/'+str(ShTID_index)+'.html')
        f = open('charts/'+str(ShTID_index)+'.html', "a")
        maxi = 0
        best_natures = []
        for i in range(25):
            if lst[ShTID_index][i] >= maxi:
                maxi = lst[ShTID_index][i]
        for i in range(25):
            if lst[ShTID_index][i] == maxi:                
                best_natures.append(i)
        if len(best_natures) == 1:
            best_natures_str = "<h1><span style='color: white'>TSV: "+str(ShTID_index) + "<br>Best Syncronize Nature: " + nature_names[best_natures[0]]
        else:
            best_natures_str = "<h1><span style='color: white'>TSV: "+str(ShTID_index) + "<br>Best Syncronize Natures: "
            for natureid in best_natures:
                best_natures_str += nature_names[natureid] + ", "
            best_natures_str = best_natures_str[:-2]
        f.write(best_natures_str)
        f.write("<br>Effective Shiny Rate: 1/" + str(round(get_effective_rates(maxi, best_natures[0])[1], 3)) + "</span><br></h1>")
        f.write("<table><tr><th>Nature</th><th>Nature Exclusive Rate</th><th>Synchronize/Everstone Rate</th></tr>")
        for i in range(25):
            f.write("<tr><td>"+nature_names[i]+"</td><td>1/"+str(round(get_effective_rates(lst[ShTID_index][i], i)[0], 3))+"</td><td>1/"+str(round(get_effective_rates(lst[ShTID_index][i], i)[1], 3))+"</td></tr>")

def make_all_nature_lists():
    for nature in nature_names:
        make_page(nature)

def group_by_odds(nature="all"):
    lst = natures_per_ShTID()
    max_dict = dict()
    for i in range(8192):
        if nature == "all":
            curr_max = str(max(lst[i][:-1]))
        else:
            curr_max = str(lst[i][nature_names.index(nature)])
        if curr_max in max_dict.keys():
            curr = max_dict[curr_max]
            curr.append(lst[i][-1])
            max_dict.update({curr_max: curr})
        else:
            max_dict[curr_max] = [lst[i][-1]]
    return max_dict

def get_first_num(strr):
    space_ind = strr.index(" ")
    return int(strr[0:space_ind])

def make_page(nature=""):
    odds_group = group_by_odds(nature)
    keys = list(odds_group.keys())
    keys.sort(reverse=True)
    shutil.copy2('l_template.html', "normal_natures/"+nature+'_list.html')
    f = open("normal_natures/"+nature+'_list.html', "a")
    f.write("<table><tr><th>Best Rate</th><th>TSV</th></tr>")
    for key in keys:
        f.write("<tr><td><b>1/"+str(round(get_effective_rates(int(key), 0)[0], 3))+"</b></td><td>")
        for elm in odds_group[key]:
            f.write('<a href="../charts/' + str(get_first_num(elm)//8) +'.html">' + str(get_first_num(elm)//8) + '</a>, ')

def make_natures_page():
    shutil.copy2('l_template.html', 'normal_natures/full_list.html')
    f = open('normal_natures/full_list.html', "a")
    f.write("<table><tr><th>Nature</th><th>Best Rate</th><th>TSV</th></tr>")
    for nature in nature_names:
        odds_group = group_by_odds(nature)
        keys = list(odds_group.keys())
        keys.sort(reverse=True)
        key = keys[0]
        f.write("<tr><td><b>"+'<a href="' + nature +'_list.html">'+nature+'</a>'+"</b></td><td><b>1/"+str(round(get_effective_rates(int(key), 0)[0], 3))+"</b></td><td>")
        for elm in odds_group[key]:
            f.write('<a href="../charts/' + str(get_first_num(elm)//8) +'.html">' + str(get_first_num(elm)//8) + '</a>, ')
        

import random
def shiny_test(ShTID, encounters, nature=0, always=True):
    '''
    run through given number of encounters looking for shinys
    if always = True sync will always trigger, else it will triger 1/2 the time
    '''
    i = 0
    shinys = 0
    while i < encounters:
        PID = random.randint(0, 4_294_967_296)
        if always or random.randint(0,2) == 0:
            while PID % 25 != nature:
                PID = random.randint(0, 4_294_967_296)
        PID1 = int(PID/65536)
        PID2 = PID % 65536
        ShPID = PID1 ^ PID2
        if is_shiny(ShTID, ShPID):
            shinys += 1
            print(str(shinys) + " " + str(i))
        i+=1
    return shinys

# Make tool for shiny checking (Using ShTID and ShPID)
def is_shiny(ShTID, ShPID):
    return (ShTID ^ ShPID) < 8

if __name__ == "__main__":
    get_gShPID_results("1_3","1:3")
    get_gShPID_results("3_1","3:1")
    get_gShPID_results("7_1","7:1")
    pass