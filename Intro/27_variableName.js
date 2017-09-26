// Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.
// Input/Output

// [time limit] 4000ms (js)
// [input] string name

// Guaranteed constraints:
// 1 ≤ name.length ≤ 10.

// [output] boolean

// true if name is a correct variable name, false otherwise.

function variableName(name) {
    let pos1 = name.search(/[0-9]/g);
    
    if(pos1 == 0){
        return false;
    }
    
    let invalid = name.search(/[^0-9a-z\_]/ig);
    
    if(invalid > -1){
        return false;
    }
    
    return true;
}
