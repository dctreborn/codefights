// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]       
// Check out the image below for better understanding:

// https://codefightsuserpics.s3.amazonaws.com/tasks/minesweeper/img/example.png?_tm=1490636350838

// Input/Output

// [time limit] 4000ms (js)
// [input] array.array.boolean matrix

// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 5,
// 2 ≤ matrix[0].length ≤ 5.

// [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

function minesweeper(matrix) {
    let mines = [];
    let row = matrix.length;
    let col = matrix[0].length;
    
    //make new matrix
    for(let i = 0; i < row; i++){
        mines.push([]);
        
        for(let k = 0; k < col; k++){
            mines[i].push(0);
        }
    }
    
    //total number of trues surrounding each cell in matrix 
    for(let i = 0; i < row; i++){
        let minRow = Math.max(0, i - 1);
        let maxRow = Math.min(row, i + 2);
        
        for(let j = 0; j < col; j++){
            let minCol = Math.max(0, j - 1);
            let maxCol = Math.min(col, j + 2);
            
            for(let k = minRow; k < maxRow; k++){
                for(let l = minCol; l < maxCol; l++){
                    if(j == l && i == k){
                        continue;
                    } else if(matrix[k][l]){
                        mines[i][j]++;
                    }
                }
            }
        }
    }
    
    return mines;
}