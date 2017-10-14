// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

// Example

//     For

//     grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//             ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//             ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//             ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//             ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//             ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//             ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//             ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

//     the output should be
//     sudoku2(grid) = true;

//     For

//     grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//             ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//             ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//             ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//             ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//             ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//             ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//             ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//             ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

//     the output should be
//     sudoku2(grid) = false.

//     The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.array.char grid

//     A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

//     [output] boolean

//     Return true if grid represents a valid Sudoku puzzle, otherwise return false.

function sudoku2(grid) {
    // check row for duplicates
    // check columns for duplicates
    // check 3x3 for duplicates
    // reset dupes after each check
    // if duplicates, return false
    // ignore periods
    // join, remove periods, check dupes?
    let col = {}, row = {}, sub = {};
    let rowLen = grid.length, colLen = grid[0].length;
    // try only one pass doing 3x3 grids
    
    for(let i = 0; i < rowLen; i++){
        let minRow = Math.max(0, i - 1);
        let maxRow = Math.min(rowLen, i + 2);
        
        for(let k = 0 < colLen; k++){
            let minCol = Math.max(0, k - 1);
            let maxCol = Math.min(col, k + 2);
            
            for(let j = minRow; j < maxRow; j++){
                for(let l = minCol; l < minCol; l++){
                    
                }
            }
        }
    }
}
