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

def read_ShPID_results(fname="shPID"):
    f = open(fname+".txt", "r")
    lines = f.readlines()
    # Strips the newline character
    lines_stripped = []
    for line in lines:
        curr = list(line.strip().strip('][').split(', '))
        if len(curr) == 26:
            curr = curr[:-1]
        curr = [ int(x) for x in curr]
        lines_stripped.append(curr)
    return lines_stripped

def natures_per_ShTID(fname):
    '''
    Returns a list of ShTIDs (grouped into sets of 8) with a breakdown
    of how many PIDs they get of each nature
    '''
    lst = [[0 for _ in range(25)] for _ in range(8192)]
    ShPID_natures = read_ShPID_results(fname)
    for ShTID in range(0, 65536, 8):
        lst[ShTID//8].append(str(ShTID) + " -> " + str(ShTID + 7))
        for ShPID in range(ShTID, ShTID + 8):
            for i in range(0, 25):
                lst[ShTID//8][i] += ShPID_natures[ShPID][i]
    return lst

def get_ShTID_results(fname1="shPID", fname2="sh"):
    results = natures_per_ShTID(fname1)
    f = open(fname2+"TID.txt", "w")
    f.write("")
    f.close()
    f = open(fname2+"TID.txt", "a")
    for result in results:
        f.write(str(result)+"\n")
    f.close()
    print("DONE")

def get_nature_totals(gender):
    ShTID_natures = read_ShPID_results(gender+"TID")
    natureslst = [0 for _ in range(26)]
    for line in ShTID_natures:
        for i in range(0, len(line)):
            natureslst[i] += line[i]
    return natureslst

total_per_nature = [171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798692, 171798691, 171798691, 171798691, 171798691]
nature_names=["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"]

def get_effective_rates(num_pids, natureID):
    #def total PIDS
    total_pids=total_per_nature[natureID]
    if num_pids == 0:
        sync_rate = 0
    else:
        sync_rate = total_pids/num_pids
    #print("1/" + str(total_pids/num_pids))
    total_rate = 1/(1/sync_rate * 0.5 + 1/8192 * 0.5)
    return [sync_rate, total_rate]

import shutil
def write_charts(gender="shPID"):
    lst = natures_per_ShTID(gender)
    best_blocks = []
    for ShTID_index in range(0,8192):
        shutil.copy2('template.html', gender+'_charts/'+str(ShTID_index)+'.html')
        f = open(gender+'_charts/'+str(ShTID_index)+'.html', "a")
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
        f.write("<br>Effective Shiny Rate: 1/" + str(round(get_effective_rates(maxi, best_natures[0])[1], 3)) + "")
        
        #Calculate the Best Pokeblock
        eff_rates = []
        for i in range(25):
            eff_rates.append(get_effective_rates(lst[ShTID_index][i], i)[0])
        pb_table = do_pokeblock_math(eff_rates)
        f.write("<br>Best Pokéblock Shiny Rate: 1/" + str(round(min(pb_table[1]),3)) + "</span><br></h1>")
        best_blocks.append((round(min(pb_table[1]),3), ShTID_index, pb_table[2]))
        #print(best_blocks)
        f.write("<table><tr><th>Nature</th><th>Nature Exclusive Rate</th><th>Synchronize/Everstone Rate</th></tr>")
        for i in range(25):
            f.write("<tr><td>"+nature_names[i]+"</td><td>1/"+str(round(get_effective_rates(lst[ShTID_index][i], i)[0], 3))+"</td><td>1/"+str(round(get_effective_rates(lst[ShTID_index][i], i)[1], 3))+"</td></tr>")
        f.write("</table><br><table><tr><th>Pokeblock</th><th>Shiny Rate</th><th>Best Neutral Rate</th><th>Effective Pokeblock Rate</th><th>Effective Pokeblock + Best Sychronize Rate</th></tr>")
        f.write(pb_table[0])
    # Make best blocks page
    shutil.copy2('l_template.html', 'blocks_list.html')
    f = open("blocks_list.html", "a")
    f.write("<table><tr><th>TSV</th><th>Pokeblock</th><th>Shiny Rate</th><th>Best Neutral Rate</th><th>Effective Pokeblock Rate</th><th>Effective Pokeblock + Best Sychronize Rate</th></tr>")
    #print(sorted(best_blocks))
    for block in sorted(best_blocks):
        f.write("<tr><td>"+'<a href="charts/' + str(block[1]) +'.html">'+str(block[1])+'</a></td>'+ block[2])

def make_all_nature_lists():
    for nature in nature_names:
        make_page(nature)
        
def make_all_gender_nature_lists(gender):
    for nature in nature_names:
        make_gender_list_page(nature, gender)

def group_by_odds(nature="all",gender="ShTID"):
    lst = natures_per_ShTID(gender)
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

def make_page(nature="all"):
    odds_group = group_by_odds(nature)
    keys = list(odds_group.keys())
    keys.sort(reverse=True, key=int)
    shutil.copy2('l_template.html', 'list.html')
    f = open('list.html', "a")
    f.write("<table><tr><th>Best Rate</th><th>TSV</th></tr>")
    for key in keys:
        f.write("<tr><td><b>1/"+str(round(get_effective_rates(int(key), 0)[0], 3))+"</b></td><td>")
        for elm in odds_group[key]:
            f.write('<a href="../charts/' + str(get_first_num(elm)//8) +'.html">' + str(get_first_num(elm)//8) + '</a>, ')
            
def make_gender_list_page(nature="all", gender=""):
    odds_group = group_by_odds(nature,gender)
    keys = list(odds_group.keys())
    keys.sort(reverse=True, key=int)
    shutil.copy2('l_template.html', gender+"_lists/"+gender+'_'+nature+'_list.html')
    f = open(gender+"_lists/"+gender+'_'+nature+'_list.html', "a")
    f.write("<table><tr><th>Best Rate</th><th>TSV</th></tr>")
    for key in keys:
        f.write("<tr><td><b>1/"+str(round(get_effective_rates(int(key), 0)[0], 3))+"</b></td><td>")
        for elm in odds_group[key]:
            f.write('<a href="../'+gender+'_charts/' + str(get_first_num(elm)//8) +'.html">' + str(get_first_num(elm)//8) + '</a>, ')

def make_natures_page(gender):
    shutil.copy2('l_template.html', gender+'_lists/full_list.html')
    f = open(gender+'_lists/full_list.html', "a")
    f.write("<table><tr><th>Nature</th><th>Best Rate</th><th>TSV</th></tr>")
    for nature in nature_names:
        odds_group = group_by_odds(nature,gender)
        keys = list(odds_group.keys())
        keys.sort(reverse=True, key=int)
        key = keys[0]
        f.write("<tr><td><b>"+'<a href="'+gender+"_" + nature +'_list.html">'+nature+'</a>'+"</b></td><td><b>1/"+str(round(get_effective_rates(int(key), 0)[0], 3))+"</b></td><td>")
        for elm in odds_group[key]:
            f.write('<a href="../'+gender+'_'+'_charts/' + str(get_first_num(elm)//8) +'.html">' + str(get_first_num(elm)//8) + '</a>, ')
        

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


def generate_all_genders():
    global total_per_nature
    for gender in ["1_1F", "1_1M", "1_3F", "1_3M", "3_1M", "3_1F", "7_1M", "7_1F"]:
        get_ShTID_results(gender, gender)
        total_per_nature = get_nature_totals(gender)
        write_charts(gender)
        make_gender_list_page(nature="all", gender=gender)
        make_all_gender_nature_lists(gender)
        make_natures_page(gender)        

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

def do_pokeblock_math(eff_rates):
    global var_list
    line = ''
    rates = []
    lines = []
    for c_block in var_list:
        b_line = ''
        pb_var = get_variance(c_block[0])
        #print(pb_var)
        block_url = ''
        block = c_block[0]
        for nat in block:
            block_url = block_url + str(nat) + "_"
        block_url = block_url[:-1]
        block_name = block_url.replace("_","/")
        b_line += '<tr><td><a href="../pokeblocks/WEBPAGES/BLOCKS/'+block_url+'.html">' + block_name + "</a></td>"
        rate = 0
        for nat in block:
            rate += eff_rates[nat] * float(pb_var[16+nat])/100
        rates.append(rate)
        b_line += '<td>1/'+ str(round(rate, 3)) +'</td>'
        b_line += '<td>'+ str(round(float(pb_var[0]), 4)) + '%</td>'
        #Effective Rate
        er1 = 1/((1/rate * 80.010986328125/100) + (1/8192 * 19.989013671875/100))
        er2 = 1/((1/rate * 80.010986328125/100) + (1/8192 * 9.9945068359375/100) + (1/min(eff_rates) * 9.9945068359375/100))
        b_line += '<td>1/'+ str(round(er1, 3)) +'</td>'
        b_line += '<td>1/'+ str(round(er2, 3)) +'</td></tr>'
        lines.append((rate, b_line))
    lines = sorted(lines)
    for l in lines:
        line += l[1]
    return (line, rates, lines[0][1][4:])

if __name__ == "__main__":
    var_list = read_variance_txt()
    write_charts()
    #generate_all_genders()
    #get_gShPID_results("1_3","1:3")
    #get_gShPID_results("3_1","3:1")
    #get_gShPID_results("7_1","7:1")
    pass