let arr = [1,2,3];
let m = arr.length;
let n = 4;
let x = count(arr, m, n);
console.log(x);

function count(S, m, n){
    let table = new Array(n + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i < m; i++){
        console.log(`round ${i + 1}`);
        for(let j = S[i]; j < n + 1; j++){
            table[j] += table[j - S[i]];
            console.log(table);
        }
    }

    return table[n];
}