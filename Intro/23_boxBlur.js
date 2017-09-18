// Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.

// The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.

// As pixel's value is an integer, all fractions should be rounded down.

// Example

// For

// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.array.integer image

// An image is stored as a rectangular matrix of non-negative integers.

// Guaranteed constraints:
// 3 ≤ image.length ≤ 10,
// 3 ≤ image[0].length ≤ 10,
// 0 ≤ image[i][j] ≤ 255.

// [output] array.array.integer

// A blurred image.

// ==Better Description by seth_w3==
// Given a "square" array (an array of arrays, with each internal array containing the same number of numbers as there are arrays in the array), replace all of the numbers that are not on the "border" with the average (rounded down) of that number and the eight other numbers "surrounding" it.

function boxBlur(image) {
    let total = 0;
    let newImg = [];
    let len = image[0].length;
    let width = image.length;
    
    //construct new image
    for(let i = 0; i < width - 2; i++){
        newImg.push([]);
        
        for(let k = 0; k < len - 2; k++){
            newImg[i].push(0);
        }
    }
    
    //get total of 3x3 square and put average into newImg
    for(let i = 0; i < newImg.length; i++){
        for(let k = 0; k < newImg[i].length; k++){
            
            for(let j = i; j < i + 3; j++){
                for(let g = k; g < k + 3; g++){
                    newImg[i][k] += image[j][g];
                }
            }
            
            newImg[i][k] = Math.floor(newImg[i][k] / 9);
        }
    }

    return newImg;
}
