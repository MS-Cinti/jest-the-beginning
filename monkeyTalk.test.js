const monkeyTalk = require('./monkeyTalk');

const emptyString = ""
const singleWord = "apple"
const multipleWords = "It is a beautiful day!"
const multiplePunctuation = "Hello, Gabesz! How are you?"

test("an empty string returns the correct value", () => {
    expect(monkeyTalk(emptyString)).toEqual("Ook.");
});

test("a string with a single word returns the correct value", () => {
    expect(monkeyTalk(singleWord)).toEqual("Eek.");
});

test("a string with multiple words starting with vowels and consonants returns the correct value", () => {
    expect(monkeyTalk(multipleWords)).toEqual("Eek eek eek ook ook.");
});

test("a string with multiple punctuation marks returns the correct value", () => {
    expect(monkeyTalk(multiplePunctuation)).toEqual("Ook ook ook eek ook.");
});