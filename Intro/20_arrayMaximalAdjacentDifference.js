// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 10,
// -15 ≤ inputArray[i] ≤ 15.

// [output] integer

// The maximal absolute difference.

function arrayMaximalAdjacentDifference(inputArray) {
    let diff = 0;
    
    for(var i = 0; i < inputArray.length - 1; i++){
        let temp = Math.abs(inputArray[i] - inputArray[i+1]);
        
        if (temp > diff) {
            diff = temp;
        }
    }
    
    return diff;
}
