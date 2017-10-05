// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.array.integer a

//     Guaranteed constraints:
//     1 ≤ a.length ≤ 100,
//     a[i].length = a.length,
//     1 ≤ a[i][j] ≤ 104.

//     [output] array.array.integer

function rotateImage(a) {
    let col = a.length, row = a[0].length;
    let b = Array(row).fill().map(x => Array(col).fill());     
    
    // create rotated matrix    
    for(let i = 0; i < row; i++){
        for(let k = 0; k < col; k++){
            b[k][row - 1 - i] = a[i][k];
        }
    }
    
    return b;
}

//to fix to O(1) space complexity; remove added matrix