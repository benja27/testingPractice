export const countLetter = (string) =>{
    var count = 0;

    if(string.length == 0) throw new Error("it has to be at least 1 character long");
    if(string.length >= 10) throw new Error("it has to be less than 10 characters long");
    
    for (var i = 0; i < string.length; i++) count += 1;        
    
    return count;
}

export default countLetter;





