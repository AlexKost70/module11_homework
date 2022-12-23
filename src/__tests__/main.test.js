const getPercents = require("../main.js");

describe("tests for getPercents function", () => {
    it("should calculate correctly number", () => {
        expect(getPercents(30, 200)).toBe(60);
    }),
    it("should return NaN if called with string argument", () => {
        expect(getPercents("test", "test")).toBe(NaN);
    }),
    it("should calculate correctly big number", ()=> {
        expect(getPercents(30000, 500)).toBe(150000);
    });
});