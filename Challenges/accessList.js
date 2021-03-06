// There is no priority for permissions, the order they appear or how deep down the membership chain they apply are not important. The only rule is deny always wins over permit.

// Example
// For groups = [[10,30], [30,20]],
// access= [[10,1,6], [30,0,4], [20,1,7]] and
// queries = [20, 30, 10], the output should be
// accessList(groups, access, queries) = [3, 2, 6].

//     ID 20 is a member of groups 10 (indirectly) and 30. All three access rules apply to it and they add up to write, execute which is 3;
//     ID 30 is a member of group 10, only the first and second access rule apply. They add up to write which is 2;
//     ID 10 is not a member of any group. Only the first rule applies, which grants read, write which is 6.
//     The final result is [3, 2, 6].

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.array.integer groups

//     Guaranteed constraints:
//     0 ≤ groups.length ≤ 1000,
//     1 ≤ groups[i].length ≤ 10.

//     [input] array.array.integer access

//     Guaranteed constraints:
//     0 ≤ access.length ≤ 1000,
//     access[i].length = 3.

//     [input] array.integer queries

//     Guaranteed constraints:
//     0 ≤ queries.length ≤ 1000.

//     [output] array.integer

//     The access level for each of the IDs in queries as an integer 0-7 inclusive.


// solution by kov
// https://codefights.com/challenge/vNJBZ2ZvXJkN4YiJk/solutions/nDNE6F3jSETD5dDgT

function accessList(groups, access, queries) {
    // map groups to member IDs using objects?
    // then search query
    // use slice?
    //  .includes(x, fromIndex)
    //  first, keys based on group number
    //  then add IDs based on direct and indirect membership
    //  "key" in obj to find if key exists
    let g = {}, a = {}, key, high = 0, low = 0;
    
    // create access rights
    for(let i = 0; i < access.length; i++){
        key = access[i];
        
        a[key[0]] = {};
        a[key[0]] = key[1] > 0 ? key[2] : -key[2];
    }
    
    console.log(a);
    
    // create group associations
    for(let i = 0; i < groups.length; i++){
        for(let j = 0; j < groups[i].length; j++){
            key = groups[i];  
            g[key[j]] = {};
            // possibly omit, just use total access instead?; fix during optimization
            g[key[j]][key[0]] = a[key[0]] || 0;
            g[key[j]][key[j]] = a[key[j]] || 0;
        }
    }
    
    // find group associations
    // fix to consider multilevel associations, not just 1 level association
    for(let i = 0; i < groups.length; i++){
        for(let j = 0; j < groups.length; j++){
            if(groups[i].includes(groups[j][0], 1)){
                key = groups[i];
                for(let k = 0; k < groups[j].length; k++){
                    g[groups[j][k]][key[0]] = a[key[0]];
                }                
            }
        }
    }

    console.log(g);    
    
    return queries.map( x => {
        console.log(`x = ${x}`);
        high = 0, low = 0;
        for(let id in g[x]){
            console.log(`${JSON.stringify(g[x])} id: ${id}`);
            let temp = g[x][id];
            console.log(`temp = ${temp}`);            
           
            if(high > 4 && high - 4 == temp){
                // do nothing
            } else if (temp > 0) {
                high +=temp;
                console.log(`high ${high}`);
                high = Math.min(7, high);
                console.log(`high ${high}`);
            }
            
            if(low < -4 && low + 4 == temp) {
                // do nothing
            } else if (temp < 0) {
                low +=temp;
                console.log(`low ${low}`);
                low = Math.max(-7, low);
                console.log(`low ${low}`);
            }
        }
        console.log(`return ${high} + ${low} = ${high + low}`);
        return high + low;
    });
}
