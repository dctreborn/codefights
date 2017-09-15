// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

function palindromeRearranging(inputString) {
    let oddLetter = 0;
    let s = inputString;
    let oddEven = s.length % 2;    
    
    for(var i = 0; i < s.length; i++){
        let search = s[i];
        let reg = new RegExp(search, "g");
        let repeats = s.match(reg).length;
        s = s.replace(reg, "");
        i--;
        
        if (repeats % 2 == 1) {
            oddLetter++;
            
            if (oddLetter > 1) {
                return false;
            }
        }        
    }
    
    return oddEven == oddLetter;
}
