// Given two strings, check whether it is possible to rearrange characters of the first string in such way that it will become equal to the second one.

// Example

//     For string1 = "abcd" and string2 = "cbad", the output should be
//     charactersRearrangement(string1, string2) = true;
//     For string1 = "a" and string2 = "b", the output should be
//     charactersRearrangement(string1, string2) = false.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] string string1

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     1 ≤ string1.length ≤ 105.

//     [input] string string2

//     A string consisting of lowercase English letters.

//     Guaranteed constraints:
//     1 ≤ string2.length ≤ 105.

//     [output] boolean

//     true if the desired rearrangement is possible, false otherwise.
function charactersRearrangement(string1, string2) {
    return string1.split("").sort().join() == string2.split("").sort().join();
}
