const findUnique = require("./findUnique")

test("the first number of the array is the odd one", () => {
    expect(findUnique([3, 6, 6])).toBe(3);
});

test("the second number of the array is the odd one", () => {
    expect(findUnique([2, 5, 2, 2])).toBe(5);
});

test("the odd one is not the first or second number of the array", () => {
    expect(findUnique([6, 6, 6, 9])).toBe(9);
});

test("invalid input. Expecting an error message", () => {
    expect( () => {findUnique([])}).toThrow('Invalid input');
});

