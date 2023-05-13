import reverse from "../functions/reverseString.js";

describe("check if the string is reversed or not", () =>{
    
    let result = reverse("hello"); //act
    
    
    test('checking', () =>{
        expect(result).toBe("olleh");
    })

})

