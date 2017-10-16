// Several friends live along a straight street. They are friends, thus they enjoy visiting each other. However, they are lazy so none of them wants to visit a friend living more than maxDist meters away from them.

// Given array houses representing coordinates of points where the friends live (in meters) and an integer maxDist, return an array representing the number of friends each person would be willing to visit.

// Example

// For houses = [1, 2, 4, 8, 10] and maxDist = 5, the output should be
// lazyFriends(houses, maxDist) = [2, 2, 3, 2, 1].

// Check out the image below for better understanding:

// https://codefightsuserpics.s3.amazonaws.com/tasks/lazyFriends/img/example.png?_tm=1490636272744

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.integer houses

//     Sorted non-empty array of distinct integers.

//     Guaranteed constraints:
//     1 ≤ houses.length ≤ 104,
//     -104 ≤ houses[i] ≤ 104.

//     [input] integer maxDist

//     Guaranteed constraints:
//     2 ≤ maxDist ≤ 105.

//     [output] array.integer

function lazyFriends(houses, maxDist) {
    
    return houses.map( (x, i) => {
        let f = 1,
            r = 1,
            count = 0,
            len = houses.length;        
       
            while(houses[i + f] - x <= maxDist){                
                f++;
                count++;
            }

            while(x - houses[i - r] <= maxDist) {
                r++;
                count++;
            }
        
        return count;
    });
}