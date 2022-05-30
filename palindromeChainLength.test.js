const {
    reverseNumber,
    isPalindrome,
    palindromeChainLength
} = require('./palindromeChainLength');


test("the reverseNumber function", () => {
    expect(reverseNumber(456)).toBe(654);
});

test("the isPalindrome function", () => {
    expect(isPalindrome(456654)).toEqual(true);
    expect(isPalindrome(321)).toEqual(false);
});

test("it takes 0 iteration to get a palindrome", () => {
    expect(palindromeChainLength(456654)).toEqual(0);
});

test("it takes 1 iteration to get a palindrome", () => {
    expect(palindromeChainLength(144)).toEqual(1);
});

test("it takes 24 iterations to get a palindrome", () => {
    expect(palindromeChainLength(89)).toEqual(24);
});

test("the number cannot be made into a palindrome and throws an error", () => {
    expect( () => {palindromeChainLength(10.911)}).toThrow('Number is too big or a Lychrel number!');
});


