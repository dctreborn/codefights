// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [time limit] 4000ms (js)
// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

function allLongestStrings(inputArray) {
    let strings = [];
    strings.push(inputArray[0]);
    
    for (var i = 1; i < inputArray.length; i++){
        if (inputArray[i].length > strings[0].length) {
            strings = [];
            strings.push(inputArray[i]);
        } else if (inputArray[i].length == strings[0].length) {
            strings.push(inputArray[i]);
        }
    }
    
    return strings;
}
