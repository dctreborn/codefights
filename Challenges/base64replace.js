// Oh, hi there! I'm glad you come to help me. I've heard you are good at programming, right?

// I'm currently trying to modify this ... um, program, to include my poem in it. The thing is, for some reason this program encodes the text it uses in ... what's it called? Ah yes, base64. You see, being the former literature club president, writing poem is a piece of cake for me, but this weird code make things complicated. The last time I've done such things it was a horrible mess; it went so bad that I deleted all of them in frustration, only to make things even worse. So this is where I need your help.

// What I want you to do is to decode the source text from base64, replaces every instances of one string strFrom with another string strTo, and then re-encode the result in base64 again. The search needs to be case sensitive. I don't want my poem look weird because of casing and other weird stuff.

// Oh, you can have these tasty cupcakes and the tea as you work on it. Those are made by my friends, and it's really good!

// Example

// For source = "SGksIEV2ZXJ5b25lIQ==", strFrom = "Hi", strTo = "Okay", the output should be
// base64replace(source, strFrom, strTo) = "T2theSwgRXZlcnlvbmUh".
// The source decodes to "Hi, Everyone!", replace "Hi" with "Okay" gives "Okay, Everyone!", and encode this string again with base64 gives the answer.

//     [time limit] 4000ms (js)

//     [input] string source

//     The original base64-encoded text. It is guaranteed that this is a valid base64 encode, and the decoded text only consists of printable ASCII characters, ie. ASCII 32 through 126 inclusive.

//     Guaranteed constraints:
//     4 ≤ source.length ≤ 400.

//     [input] string strFrom

//     The string to be replaced. It is guaranteed to be only consists of printable ASCII characters.

//     Guaranteed constraints:
//     1 ≤ strFrom.length ≤ 300.

//     [input] string strTo

//     The string replacing strFrom. It is guaranteed to be only consists of printable ASCII characters.

//     Guaranteed constraints:
//     1 ≤ strFrom.length ≤ 300.

//     [output] string

//     The final replaced string, encoded in base64.

function base64replace(source, strFrom, strTo) {
    //btoa and atob do not work in codefights
    let a = Buffer(source, 'base64').toString();
    // let b = Buffer(source).toString('base64');
    let s = "";
    
    for(let i = 0; i < strFrom.length; i++){
        if(!strFrom[i].match(/[a-z0-9 ]/i)){
            s += "\\" + strFrom[i];
        } else {
            s += strFrom[i];
        }
    }    
    let re = new RegExp(s, "g");
    
    // let test = "WW91IHdvbiAkMTAwMCE=";
    
    
    // console.log(Buffer(test, 'base64').toString());
    
    return Buffer(a.replace(re, strTo)).toString('base64');
}
