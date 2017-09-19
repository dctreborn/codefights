// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.
// Input/Output

// [time limit] 4000ms (js)
// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.

function evenDigitsOnly(n) {
    let str = n.toString();
    let len = str.length;

    for(let i = 0; i < len; i++){
        if(str[i] % 2 != 0){
            return false;
        }
    }

    return true;
}
