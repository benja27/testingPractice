import capitalize from "../functions/capitalize.js";

describe("testing capitalize", () => {
    test('testing capitalize function', () =>{
        expect(capitalize("hello")).toBe("Hello");
    })
});
