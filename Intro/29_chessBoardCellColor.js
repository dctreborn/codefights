// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// https://codefightsuserpics.s3.amazonaws.com/tasks/chessBoardCellColor/img/example1.png?_tm=1494338560912

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

// https://codefightsuserpics.s3.amazonaws.com/tasks/chessBoardCellColor/img/example2.png?_tm=1494338561188

// Input/Output

// [time limit] 4000ms (js)
// [input] string cell1
// [input] string cell2
// [output] boolean

// true if both cells have the same color, false otherwise.

function chessBoardCellColor(cell1, cell2) {
    let first = [cell1.charCodeAt(0), parseInt(cell1.charAt(1))];
    let second = [cell2.charCodeAt(0), parseInt(cell2.charAt(1))];
    
    return (first[0] % 2 == first[1] % 2) == (second[0] % 2 == second[1] % 2);
    
}
