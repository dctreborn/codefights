// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [time limit] 4000ms (js)
// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 5,
// 1 ≤ picture[i].length ≤ 5.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function addBorder(picture) {
    let size = picture[0].length + 2;
    let newPic = [];
    
    for(var i = 0; i < picture.length + 2; i++){
        if(i == 0 || i == picture.length + 1){
            newPic.push("*".repeat(size));
        } else {
            newPic.push(`*${picture[i-1]}*`);
        }
    }
    
    return newPic;
}
