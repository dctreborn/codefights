// Mr. Saito is an immensely powerful and wealthy businessman. He has offered Cobb (the best Extractor) a job, to obtain a secret message from Robert Fischer's mind. Robert Fischer has been trained in techniques to protect his mind from extractors.

// The secret message has been encrypted and can only be decrypted using the key.

// The encryption is done by placing the message, character by character in a two-dimensional square matrix. The spaces after the message(if any) is acquired by '$'. Then the matrix is rearranged row and column wise providing the key value.

// Find the original message if the encrypted message and the key is provided.

// Example

//     For encrypM = "dcba" and key = 21, the output should be
//     theMasterPlan(encrypM, key) = "abcd".
//     Intermediate two-dimensional matrix:

// [[d,c],
//  [b,a]]

// For original message:
// 2nd row and 2nd column of encrypted message acquires 1st row and 1st column of original message.
// 1st row and 1st column of encrypted message acquires 2nd row and 2nd column of original message.
// Two-dimensional matrix after rearranging according to key:

// [[a,b],
//  [c,d]]

// So, the output is "abcd".

//     For encrypM = "v iaia dnk iel$rs$uie sa" and key = 25314,
//     the output should be
//     theMasterPlan(encrypM, key) = "an idea is like a virus".
//     Intermediate two-dimensional matrix:

// [[v, , ,i,a],
//  [i,a, ,d,n],
//  [k, ,i,e,l],
//  [$,r,s,$,u],
//  [i,e, ,s,a]]

// For original message:
// 2nd row and 2nd column of encrypted message acquires. 1st row and 1st column of original message.
// 5th row and 5th column of encrypted message acquires. 2nd row and 2nd column of original message and so on.
// Two-dimensional matrix after rearranging according to key:

// [[a,n, ,i,d],
//  [e,a, ,i,s],
//  [ ,l,i,k,e],
//  [ ,a, ,v,i],
//  [r,u,s,$,$]]

// So, the expected output is "an idea is like a virus".

// Input/Output

//     [time limit] 4000ms (js)

//     [input] string encrypM

//     The encrypted message containing lowercase characters along with blank spaces and '$' denoting stuffed extra characters.

//     Guaranteed constraints:
//     0 < encrypM.length < 100.

//     [input] integer key

//     The key denoting the re-arranged order of columns and rows in a two-dimensional array as its digits.

//     Guaranteed constraints:
//     key.digits ∈ [1-7].

//     [output] string

//     The decrypted message to be obtained from the encrypted message.


function theMasterPlan(encrypM, key) {
    let c = 0, swap, out = "";
    let code = key.toString().split("").map(x => parseInt(x));
    let len = encrypM.length ** 0.5;
    let matrix = Array(len).fill().map( () => Array(len).fill());
    
    matrix.map( (x, r) => x.map( (y, k) => {
        matrix[r][k] = encrypM[c];
        c++
    }));
    
    code.map( x => {
       code.map( y => {
        swap = matrix[x - 1][y - 1];           
        out += swap == "$" ? " " : swap;
       });
    });
    
    return out.trim();
}
