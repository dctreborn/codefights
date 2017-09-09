// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [time limit] 4000ms (js)
// [input] string s1

// A string consisting of lowercase latin letters a-z.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase latin letters a-z.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// [output] integer

function commonCharacterCount(s1, s2) {
    let common = 0;
    let tempString = s2;
    
    for(var i = 0; i < s1.length; i++) {
        for (var j = 0; j < tempString.length; j++){
            if (s1[i] == tempString[j]) {
                common++;
                tempString = tempString.replace(tempString[j], "");
                break;
            }
        }
    }
    
    return common;
}
