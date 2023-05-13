
import Calculator from "../functions/calculator.js";
const calc = new Calculator();


describe("testing add calculator function", () =>{
    test('testing add function', () =>{
        expect(calc.add(1,2)).toBe(3);
    })
    test('testing add function', () =>{
        expect(calc.add(5,2)).toBe(7);
    })
    test('testing add function', () =>{
        expect(calc.add(8,2)).toBe(10);
    })
});

describe("testing subtract calculator function", () =>{
    test('testing subtract function', () =>{
        expect(calc.subtract(2,2)).toBe(0);
    })
    test('testing subtract function', () =>{
        expect(calc.subtract(5,2)).toBe(3);
    })
    test('testing subtract function', () =>{
        expect(calc.subtract(8,2)).toBe(6);
    })
});

describe("testing multiply calculator function", () =>{
    test('testing multiply function', () =>{
        expect(calc.multiply(1,2)).toBe(2);
    })
    test('testing multiply function', () =>{
        expect(calc.multiply(5,2)).toBe(10);
    })
    test('testing multiply function', () =>{
        expect(calc.multiply(8,2)).toBe(16);
    })
});

describe("testing divide calculator function", () =>{
    test('testing divide function', () =>{
        expect(calc.divide(10,2)).toBe(5);
    })
    test('testing divide function', () =>{
        expect(calc.divide(6,2)).toBe(3);
    })
    test('testing divide function', () =>{
        expect(calc.divide(8,2)).toBe(4);
    })
});