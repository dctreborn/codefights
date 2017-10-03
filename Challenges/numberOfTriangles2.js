// You have N sticks. Given an array of their lengths, find the number of triangles that can be constructed using any three of these sticks. Note that the sum of the lengths of any two sides of a triangle must be greater than the third side.

// Equal triangles that are constructed from different sticks are considered different.

// Example

//     For sticks = [3, 5, 7, 9], the output should be
//     numberOfTriangles2(sticks) = 3.

//     These 3 triangles are (described by their sides): (3, 5, 7), (3, 7, 9), (5, 7, 9).
//     The triangle (3, 5, 9) is not valid, as 3 + 5 = 8 < 9.

//     For sticks = [4, 4, 4, 4], the output should be
//     numberOfTriangles2(sticks) = 4.

//     These 4 triangles are (4, 4, 4) made of different sticks.

//     For sticks = [1, 2, 3], the output should be
//     numberOfTriangles2(sticks) = 0.

//     There is only one triangle (1, 2, 3), but it is incorrect: 1 + 2 = 3.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer sticks

//     A sorted array of at least three positive integers.

//     Guaranteed constraints:
//     3 ≤ sticks.length ≤ 10,
//     1 ≤ sticks[i] ≤ 20.

//     [output] integer

function numberOfTriangles2(sticks) {
    let array = sticks.sort( (a, b) => a - b);
    let len = sticks.length;
    //if a + b > c, triangle is possible    
    let num = 0;
    
    for(let i = 0; i < len - 2; i++){
        for(let j = i + 1; j < len - 1; j++){
            for(let k = j + 1; k < len; k++){
                num += (array[i] + array[j] > array[k] ? 1 : 0);
            }
        }
    }
    
    return num;
}
