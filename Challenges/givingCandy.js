// Trick-or-treat! It's Halloween! Like every year, you've decided to distribute candy tonight for all the trick-or-treaters. Your supplies are limited however, and you want to give all of them the same amount for each type of candy.

// With a list of every type of candy you have and the number of the average number of kids who knock on your door for the previous years, create a string of instructing how many candies of every kind you should give to each kid. Please do keep in mind that if there are leftover candy that is smaller than the number of kids, do not give them away. Those are for you. The format should be:
// "Give <List of candies> to every kid"

// You're also trying to make sure there's enough candy for everyone. So if there isn't enough candy of one kind for the trick-or-treaters, you need to remind yourself to buy some more candy by returning a string where it should say:
// "Oops! You should buy some more <Missing Candy/Candies>!"

// How the array is formatted:

// [ ["Candy Type", "Number of Candy"], ["Candy Type 2", "Number of Candy 2"], etc ]

// Using an array of every type of candy and its quantity with a number of how many kids there are, return a string with instructions on how many candy of each type you should give to every kid, while making sure there's enough candy for everyone. Extra candy won't be given out if it's less than the number of kids.

// Note: Grammar doesn't matter for this question. Just use the candy name given from the list, you don't need to change between the singular or plural form.

// Example
// For candies = [["Chocolate", "34"], ["Jellybean", "45"]]
// and kids = 15, the output should be
// givingCandy(candies, kids) = "Give 2 Chocolate and 3 Jellybean to every kid".

// Input/Output

// [time limit] 4000ms (js)
// [input] array.array.string candies

// An array containing the name/type of candy, along with the number of that specific candy.

// Guaranteed constraints:
// 1 ≤ candies.length ≤ 104,
// candies[i].length = 2,
// 1 ≤ candies[i][0].length ≤ 100,
// 1 ≤ candies[i][1] ≤ 231 - 1.

// [input] integer kids

// Number of kids who usually come ask for candy on Halloween.

// Guaranteed constraints:
// 1 ≤ kids ≤ 231 - 1.

// [output] string

// Some instruction on how many candy should be given to each kid, or "Oops! You should buy some more <Missing Candy/Candies>!".

function givingCandy(candies, kids) {
    let s = "Give", buy = "Oops! You should buy some more", num; 
    let len, g = 0, b = 0, last, pre, post;
      
    candies.map( (x, i) => {
        num = Math.floor(x[1]/kids);
        if (num == 0){
            buy += ` ${x[0]},`;
            b++;
        } else {
            s += ` ${num} ${x[0]},`;
            g++;
        }
        
        if(i + 1 == candies.length){
            buy = buy.slice(0, -1);
            s = s.slice(0, -1);
            
            last = b ? buy.lastIndexOf(",") : s.lastIndexOf(",");
            len = b ? buy.length : s.length;
            pre = b ? (buy.substring(0, last) + (b > 2 ? "," : "")): (s.substring(0, last) + (g > 2 ? ",": ""));
            post = " and" + (b ? buy.substring(last + 1, len) : s.substring(last + 1, len));
            
            buy = b > 1 ? pre + post : buy;
            s = g > 1 ? pre + post : s;
        }
    });
    
    return b ? buy + "!" : s + " to every kid";
}
