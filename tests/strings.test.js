import { countLetter } from "../functions/strings.js";

describe("test 4 diferent functions", () =>{           
    
    let result = countLetter("hello"); //act

    test("lets check if we can count letters on a given string", ()=>{
        expect(result).toBe(5,'it has to be 5 characters');        
        expect(countLetter("benja")).toBe(5);        
        expect(countLetter("h")).toBe(1);      
    })

    test("stringLength throws an error if the string is less than 1 character long", () => {
        expect(() => countLetter("")).toThrow(
          "it has to be at least 1 character long"
        );
    });

    test("check if the string is less than 10 characters long", () => {
        expect(() => countLetter("12345678910")).toThrow(
          "it has to be less than 10 characters long"
        );
    })    
    
});