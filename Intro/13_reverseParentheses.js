// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

// Input/Output

// [time limit] 4000ms (js)
// [input] string s

// A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.

// Constraints:
// 5 ≤ s.length ≤ 55.

// [output] string

function reverseParentheses(s) {
    while(s.includes("\(")) {
        let open = s.lastIndexOf("\(");
        let close = s.indexOf("\)", open);
        let sub = s.substring(open, close + 1);
        let sub2 = sub
        
        sub = sub.replace("\(", "");
        sub = sub.replace("\)", "");
        sub = sub.split("").reverse().join("");
        s = s.replace(sub2, sub);        
    }
    
    return s;
}