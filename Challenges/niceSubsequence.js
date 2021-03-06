// Given an array a, a nice subsequence of a is a contiguous subsequence of a such that all of its values are at least the size of subsequence itself.

// For example, for a = [1, 2, 3, 4, 5], we have that [2, 3] and [3, 4, 5] are nice subsequences of a since the values in each subsequence are at least as large as size of the subsequence. However, [1, 2] and [2, 3, 4] are not nice subsequences of a since the former has size 2 but contains the value 1, and the latter has size 3 but contains the value 2.
// Given an array a, your task is to find the size of the largest nice subsequence of a.

// Example
// For a = [1, 2, 3, 4, 5], the output should be
// niceSubsequence(a) = 3.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer a

//     The input array.

//     Guaranteed constraints:
//     1 ≤ a.size ≤ 1.5 · 105,
//     0 ≤ a[i] ≤ a.size.

//     [output] integer

//     The size of the longest nice subsequence of a.

function niceSubsequence(a) {
    let len = a.length, long = 0, temp, val, count;
    
    for(let i = 0; i < len; i++){
        val = a[i];  
        count = 0;
        // search left
        temp = Math.max(i - val, 0);
        for(let k = i; k >= temp; k--){
            if(a[k] < val){
                break;
            } else {
                count++;
            }
        }
        // search right
        temp = i + val - count + 1;
        count--;
        if(temp > len){
            // do nothing
        } else{
            for(let j = i; j < temp; j++){
                if(a[j] < val){
                    break;
                } else {
                    count++;
                }
            }
        }
        
        long = count > long ? count : long;
    }
    
    return long;
}