// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString

// Non-empty string consisting of lowercase English characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 10.

// [output] string

// The result string after replacing all of its characters.

function alphabeticShift(inputString) {
    let aCode = "a".charCodeAt(0);
    let zCode = "z".charCodeAt(0);
    let newStr = "";
    
    
    for(let i = 0; i < inputString.length; i++){
        let code = inputString.charCodeAt(i);
        
        if(code == zCode) {
            code = aCode;
        } else {
            code++;
        }
        
        newStr += String.fromCharCode(code);
    }
    
    return newStr;
}
