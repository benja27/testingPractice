const countLetter = (string) =>{
    var count = 0;

    if(string.length == 0) return "empty string";
    if(string.length >= 10) return "greather than 10";
    
    for (var i = 0; i < string.length; i++) count += 1;        
    
    return count;
}

module.exports = countLetter;
