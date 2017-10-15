// You are given a string of positive numbers in no specific order, delimited by commas. Your job is to return a string of ranges extrapolated from the input, in ascending order. If the input string contains any characters other than positive integers and commas, the string "undefined" should be returned.

// Example
// For str = "5,10,11,20,21,12,13,100,1,2,3", the output should be
// extrapolateRanges(str) = "1-3,5,10-13,20-21,100".

// Input/Output

//     [time limit] 4000ms (js)

//     [input] string str

//     String of positive integers, delimited by commas.

//     Guaranteed constraints:
//     1 ≤ str.length < 105.

//     [output] string

//     A string of comma delimited ranges or "undefined". A range can be a single integer, or an inclusive list of integers specified in the following format: {min}-{max} (e.g. 5-9).

function extrapolateRanges(str) {
    function extrapolateRanges(str) {
        let s = str.split(","), num1, num2, output = "", end, min;
        s.sort( (a, b) => parseInt(a) - parseInt(b));
        console.log(s);
        for(let i = 0; i < s.length; i++){
            num1 = parseInt(s[i]);
            end = output == null ? "" : output.charAt(output.length-1);
            
            if(num1 < 1){
                return "undefined";
            } else if (i == 0){
                min = num1;
            } else if (num1 == num2){
                //do nothing
            } else if (num1 > num2 + 1 && num2 == min){
                output += (min + ",");
                min = num1;
            } else if (num1 > num2 + 1){
                output += (min + "-" + num2 + ",");
                min = num1;
            } else if (i == s.length - 1){
                output += (min + "-");
            }
            
            num2 = num1;
        }
        
        return output + num2;
    }
