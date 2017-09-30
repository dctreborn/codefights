// This is a reverse challenge, enjoy!

// Input/Output

//     [time limit] 4000ms (js)

//     [input] integer ff

//     Guaranteed constraints:
//     0 ≤ ff ≤ 108.

//     [output] boolean

// Challenge: is the square root of the given number a fibonacci number?

function fibFib(ff) {
    let root = Math.sqrt(ff);
    let a = 0, b = 1, temp, res;
    
    while(a <= root){
        res = root == a ? true : false;

        temp = a;
        a += b;
        b = temp;
    }
    
    return res
}
