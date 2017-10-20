// Given a sequence, check whether it is cyclic increasing.

// Example

//     For sequence = [5, 9, 1, 2, 4], the output should be
//     cyclicSequence(sequence) = true.

//     Increasing sequence can be started from number 1.

//     For sequence = [1, 3, 2], the output should be
//     cyclicSequence(sequence) = false.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer sequence

//     Guaranteed constraints:
//     1 ≤ sequence.length ≤ 105,
//     -105 ≤ sequence[i] ≤ 105.

//     [output] boolean

//     true if sequence is cyclic increasing, false otherwise.

function cyclicSequence(sequence) {
    let down = 0;
    
    sequence.map( (x, i) => {
        down += i == sequence.length - 1 ? (x >= sequence[0] ? 1 : 0) : 0;
        down += x >= sequence[i + 1] ? 1 : 0;
    });
    
    return down > 1 ? 0 : 1;
}
