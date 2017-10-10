// In the game of American Football there are several ways of scoring:

//     Field Goal (3 points)
//     Touchdown (6 points) followed by either
//         Extra point kick attempt (1 point if successful)
//         2 point conversion attempt (2 points if successful)
//     Safety (a type of infraction by the opponent) (2 points)

// update It was brought to my attention that the is a second type of Safety worth 1 point, for this challenge please ignore this and follow the scoring rules exactly as stated above.

// Given a score, how many distinct ways are there for a team to reach it? As this number can be quite large return it mod 109 + 7.
// Order does matter (Field Goal + Safety is distinct from Safety + Field Goal).
// 2 points scored on a two point conversion is considered distinct from 2 points scored on a Safety.

// Example
// For score = 5, the output should be
// americanFootball(score) = 2.
// Here are the ways to reach such score:

//     Field Goal + Safety;
//     Safety + Field Goal.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] integer score

//     Guaranteed constraints:
//     0 ≤ score ≤ 5 · 104.

//     [output] integer

//     Number of distinct scoring combinations to obtain the given score modulo 109 + 7.

//work in progress
function americanFootball(score) {
    let table = new Array(score + 1).fill(0);
    let pts = [3, 6, 2, 1, 2, 0];
    let len = pts.length - 3;
    table[0] = 1;
    
    for(let i = 0; i < len; i++){
        for(let j = pts[i]; j < score + 1; j++){
            table[j] += table[j - pts[i]];
            if(i == 1){
                for(let x = 3; x < len + 3; x++){
                    for(let k = pts[x]; k < len + 3; k++){
                        table[k] += table[k - pts[x]]
                    }    
                }                            
            }
        }
    }
    
    return table[score] % (10 ** 9 + 7);
}