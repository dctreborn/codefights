// Given array of integers, check whether each integer, that occurs in it, is contained there the same number of times as any other integer from the given array.

// Example

//     For inputArray = [1, 2, 2, 1], the output should be
//     checkEqualFrequency(inputArray) = true;
//     For inputArray = [1, 2, 2, 3, 1, 3, 1, 3], the output should be
//     checkEqualFrequency(inputArray) = false.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer inputArray

//     Guaranteed constraints:
//     1 ≤ inputArray.length ≤ 5 · 104,
//     1 ≤ inputArray[i] ≤ 4 · 108.

//     [output] boolean

function checkEqualFrequency(inputArray) {
    inputArray.sort( (a, b) => a - b);
    let arr = [];
    
    inputArray.map( (x, i) => {        
        if (x == inputArray[i - 1]){
            arr[arr.length - 1]++;
        } else {
            arr.push(1);
        }
    });
    
    return arr.every( (x, i, a) => x == arr[0]);
}
