// My cat friends have decided to subscribe to Catflix. Catflix is a streaming service, similar to humans' Netflix, but much more interesting for cats. Unfortunately, you could not watch the shows on Catflix in a record because all of them are streamed online with a certain timetable. But still, the cats want to have Catflix and each of them has prepared the list of shows he would like to watch.
// The human slaves owners of my friends are not that enthusiastic of the idea. They are afraid that cats start watching the shows too much, so every owner has decided to set a limit, how much time his cat is allowed to watch Catflix.
// So my friends want to persuade their owners, that they really need Catflix. But before asking the owners, they want to make sure, that the owners would say "Yes" to their demand. So you have to write a program, which decides, if the owner would agree to buy his cat a Catflix subscription.

// Following cases could occur:

//     Cat wants to watch more TV then he is allowed to. If the total duration of his desired shows is strictly greater then the allowed time limit, you should return a message "You are not allowed to watch so much TV, name", where name is the name of the cat.
//     Cat wants some shows that overlap in time. There should be at least one minute between the end of the first show and the start of the second one. If there are some shows that overlap, you should return the following message "show1 and show2 overlap, pick one, name", where show1 and show2 are the titles of the overlapping shows. If there occurs more then one overlapping, you should return the earliest one.
//     If there are no problems with time limit and overlapping, return the following message:
//     "You may watch your shows, name"

// It is guaranteed that all titles of the shows are unique.

// Example

//     For shows = [["Cat and Morty","11:15","11:45"],["Doctor Cat","13:30","14:45"]], limit = "01:30" and name = "Pluffy",
//     the output should be
//     catflix(shows, limit, name) = "You are not allowed to watch so much TV, Pluffy".
//     The total duration of the shows is 01:45, and the Pluffy is only allowed to watch 01:30 TV a day.

//     For shows = [["House of Cats", "12:30", "13:30"], ["Game of Paws", "11:00", "12:30"], ["Better Call Cat", "13:35", "14:15"]], limit = "05:30" and name = "Pussycat",
//     the output should be
//     catflix(shows, limit, name) = "Game of Paws and House of Cats overlap, pick one, Pussycat".
//     Total duration of the shows is below the limit, but the "House of Cats" starts the same time the "Game of Paws" end, so there is an overlapping.

// Input/Output

//     [time limit] 4000ms (js)

//     [input] array.array.string shows

//     Matrix N*3 containing the list of the desired shows, one show per raw.
//     shows[i][0] is the unique title of the show, shows[i][1] is the start time of the show in format HH:MM from 00:00 to 23:58, and shows[i][2] is the end time in the same format from 00:01 to 23:59. Duration of each show is at least 1 minute, and it is guaranteed, that all shows end before midnight. The matrix is not sorted.

//     Guaranteed constraints:
//     1 ≤ shows.size ≤ 15
//     shows[i].size = 3
//     1 ≤ shows[i][0].length ≤ 30
//     shows[i][1].length=shows[i][2].length = 5

//     [input] string limit

//     A string, representing the time limit of TV for the cat. Limit is given in format HH:MM, from 00:00 to 24:00.

//     Guaranteed constraints:
//     limit.length = 5

//     [input] string name

//     The name of the cat who has created the list.

//     Guaranteed constraints:
//     1 ≤ name.length ≤ 20

//     [output] string

//     A string containing the message for the cat regarding if he would be allowed to watch the shows or not. If there is an overlapping and exceeding of the time limit at the same time, you should output the exceeding of the time limit message.

function catflix(shows, limit, name) {
    let time1, time2, timeDiff = 0, times = [];
    let lim = +limit.substring(0,2) + limit.substring(3,5) / 60;
    
    shows.map( x => {
        time2 = +x[2].substring(0,2) + x[2].substring(3,5) / 60;
        time1 = +x[1].substring(0,2) + x[1].substring(3,5) / 60;
        timeDiff += time2 - time1;
        times.push([time1, time2]);
    });
    
    console.log(times);
    
    if(timeDiff > lim){
        return `You are not allowed to watch so much TV, ${name}`;
    }
    
    for(let i = 0; i < times.length - 2; i++){
        for(let k = i + 1; k < times.length - 1; k++){
            for(let j = 0; j < 2; j++){
                // console.log(`${times[i][0]} ${times[k][j]} ${times[i][1]}`);
                console.log(`${times[k][j]} >= ${times[i][0] - 1/60} and ${times[k][j]} <= ${times[i][1] + 1/60}`);
                console.log(`${times[k][j] >= times[i][0] - 1/60} ${times[k][j] <= times[i][1] + 1/60}`);
                console.log(times[k][j] >= (times[i][0] - 1/60));
                console.log(times[k][j] <= (times[i][1] + 1/60));
                if(times[k][j] >= (times[i][0]) && times[k][j] <= (times[i][1])) {
                    return `${shows[i][0]} and ${shows[k][0]} overlap, pick one, ${name}`;
                }
            }            
        }        
    }
    
    return `You may watch your shows, ${name}`;
}
