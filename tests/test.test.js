// import { countLetter } from "../index.js";

const countLetter = require("../index.js");

describe("test 3 diferent functions", () =>{
    test("lets check if we can count letters on a given string", ()=>{

        expect(countLetter("hola")).toBe(4);
    })



})