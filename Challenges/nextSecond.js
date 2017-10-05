// Given some time output the time after one second.

// Example

// For currentTime = [23, 59, 59], the output should be
// nextSecond(currentTime) = [0, 0, 0].

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer currentTime

//     Current time represented by array of three integers as follows: [hours, minutes, second].

//     The time is guaranteed to be valid, i.e.:
//     0 ≤ hours ≤ 23,
//     0 ≤ minutes, seconds ≤ 59.

//     [output] array.integer

//     Time after one second in the same format.

function nextSecond(now) {
    let later = [], total, carry = 1;
    
    now.reverse().map( (x, y) => {
        total = x + carry;
        later.unshift(total == (y < 2 ? 60 : 24) ?
                     0 : total);
        carry = later[0] == 0 ? 1 : 0;
    });
    
    return later;
}
