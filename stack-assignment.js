const { Stack } = require('./stack');
const {
     peek,
     isEmpty,
     display,
     is_palindrome,
     matchParen,
     sort
} = require('./stack-functions');

function main() {
     let starTrek = new Stack();

     starTrek.push('Kirk')
     starTrek.push('Spock')
     starTrek.push('McCoy')
     starTrek.push('Scotty')

     display(starTrek);

     console.log(isEmpty(starTrek));

     console.log(peek(starTrek));
};

main();

function is_palindromeTest() {
     // true, true, true, false
     console.log(is_palindrome('dad'));
     console.log(is_palindrome('A man, a plan, a canal: Panama'));
     console.log(is_palindrome('1001'));
     console.log(is_palindrome('Tauhida'));
};

is_palindromeTest();

function matchTest() {
     console.log(matchParen('((Hello))'));
     console.log(matchParen('((Hello)'));
};

matchTest();

function sortTest() {
     const sortStack = new Stack();
     sortStack.push(4);
     sortStack.push(9);
     sortStack.push(5);
     sortStack.push(7);

     const sortedStack = sort(sortStack);
     display(sortedStack);
};

sortTest();