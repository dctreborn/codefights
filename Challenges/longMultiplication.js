// Recently there have been several challenges which require the manipulation of very large numbers. If your favorite language has built-in support for big integers you might not have given this second thought, therefor in the interest of spreading the joy you will now need to implement multiplication of two integers the good-old fashioned way.

// Now, before you start hatching up a plan to cheat using built-in big integers, for this challenge you need to return the number of carry operations.

// Reminder, calculating a · b

// a=123
// b=45

// First find 123 · 5

// 11
// ---
// 123
//   5
// ---
// 615

// This yields two carry operations

// Next find 123 · 4, padding one zero to the right:

//   1
// ----
//  123
//    4
// ----
// 4920

// This yields one additional carry

// Now sum 615 + 4920

// 1
// ----
//  615
// 4920
// ----
// 5535

// This again yields one carry operation

// The total number of carry operations therefore is 4.

// Counting carry operations

//     Although the product does not depend on the order of a and b, for counting carry operations it is important that you perform a · b and not b · a;
//     Only count carry operations, the actual amount carried is not important;
//     First find all the sub multiplication results, then sum them all at once. During the summation each column can generate 0 or 1 carry operations, for instance a column containing [9, 8, 7] only counts as a single carry operation even though any two of these numbers would generate a carry operation.

// Example
// For a = "123" and b = "45", the output should be
// longMultiplication(a, b) = 4.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] string a

//     The first number.

//     Guaranteed constraints:
//     1 ≤ a.length < 850.

//     [input] string b

//     The second number.

//     Guaranteed constraints:
//     1 ≤ a.length < 850.

//     [output] integer

//     The number of carry operations performed while multiplying a by b.

function longMultiplication(a, b) {
    let carry = 0;
    let carryVal = 0;
    let index = -1;
    let nums = [];
    let aLen = a.length;
    let bLen = b.length;
 
    for(let i = bLen - 1; i >= 0; i--){
        nums.push("");
        index++;
        nums[index] = "0".repeat(index);
        carryVal = 0;
        
        for(let j = aLen - 1; j >= 0; j--){
            let prod = b[i] * a[j] + parseInt(carryVal);
            
            if(prod >= 10){
                carry++;
                carryVal = prod.toString()[0];
            } else {
                carryVal = 0;
            }
            prod = prod.toString();
            
            if(j == 0){
                nums[index] = prod + nums[index];
            } else {
                nums[index] = prod[prod.length - 1] + nums[index];
            }
           
        }
    }
    console.log(nums);
    
    carryVal = 0;
    let maxLen = Math.max.apply(Math, nums.map(x => x.length));
    let newNums = [];
    nums.map(x => newNums.push("0".repeat(maxLen - x.length) + x));
    
    for(let i = maxLen - 1; i >= 0; i--){
        let total = 0;
        newNums.map(x => (total += parseInt(x[i])));        
        total += parseInt(carryVal);
        
        if(total >= 10){
            carry++;
            carryVal = total.toString()[0];
        } else {
            carryVal = 0;
        }
    }
    
    return carry;
}
