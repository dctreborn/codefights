// Given an array of strings, produce a single string as follows:

// Repeat the following steps while there is more than one string in the array:

//     find the shortest string in the array (if there are several strings of the same length take the leftmost one);
//     find the shortest string among the rest (if there are several strings of the same length take the rightmost one);
//     extract the chosen strings from the array;
//     append the result of their concatenation (the second string should be added to the end of the first string) to the right end of the array.

// After the algorithm has finished, there will be a single string left in the array. Return that string.

// Example

// For init = ["aaa", "dd", "bbbbb"], the output should be
// concatenationProcess(init) = "bbbbbddaaa".

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.string init

//     A non-empty array of strings.

//     Guaranteed constraints:
//     1 ≤ init.length ≤ 10,
//     0 ≤ init[i].length ≤ 25.

//     [output] string

// original answer

function concatenationProcess(init) {
    
     if (init.length > 1){
         let left = init[0];
         
         for(let i = 1; i < init.length; i++){
             left = left.length > init[i].length ? init[i] : left;
         }
 
         init.splice(init.indexOf(left), 1);
 
         let right = init[init.length-1];
         
         for(let k = init.length - 2; k >= 0; k--){
             right = right.length > init[k].length ? init[k] : right;
         }
         
         init.splice(init.lastIndexOf(right), 1);
         init.push(left + right);
         
         return concatenationProcess(init);
     } else {
         return init[0];
     }
 }