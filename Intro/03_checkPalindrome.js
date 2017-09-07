function checkPalindrome(inputString) {
    var length = inputString.length;
    
    for(var i = 0; i < length; i++){
        if (inputString[i] != inputString[length - 1 - i]){
            return false;
        }
    }
    
    return true;
}