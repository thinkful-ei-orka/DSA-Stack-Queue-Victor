const { Stack } = require('./stack')

function peek(stack) {
     if (stack.top === null) { return null; }
     return stack.top
}

function isEmpty(stack) {
     if (stack.top === null) { return true; }
     else return false;
}

function display(stack) {
     let stackDisplay = '';
     let currNode = stack.top;
     if (!currNode) { 
          console.log('Empty')
          return;
     }
     if (currNode.next === null) { 
          console.log(`${currNode.data}, next is null.`) 
     return; }
     while (currNode.next !== null) { stackDisplay += `${currNode.data}. Next is `;
          currNode = currNode.next
     }
     stackDisplay += `${currNode.data}, next is null.`;
     console.log(stack)
     console.log(stackDisplay)
}

function is_palindrome(s) {
     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
     let palindrome = new Stack();
     let split = s.split('');
     let length = split.length;
     let backwards = '';

     split.forEach(char => palindrome.push(char))
     for (let i = length; i > 0; i--) { backwards += palindrome.pop() }
     if (s === backwards) {
          return true
     }
     else return false
}

function matchParen(string) {
     const stack = new Stack();
     if (!string) {
          return null
     }
     for (let i = 0; i < string.length; i++) {
          if (string[i] === '(') { stack.push(string[i]) }
          if (string[i] === ')') {
               if (isEmpty(stack)) {
                    console.log('You are missing a (')
                    return false;
               }
               stack.pop()
          }
          if (!isEmpty(stack)) {
               console.log('You are missing a )')
               return false
          }
     }
     return true
}

function sort(stack) {

     if (stack.top === null || stack.top.next === null) {
          return stack
     }
     let newStack = new Stack();
     let min = stack.top.value;
     let max = stack.top.value;
     let currNode = stack.top;

     while (currNode.next != null) {
          if (currNode.value > max) { max = currNode.value; }
          if (currNode.value < min) { min = currNode.value; }
          currNode = currNode.next
     }

     if (currNode.value > max) { max = currNode.value; }
     if (currNode.value < min) { min = currNode.value; }

     newStack.push(max)

     while (newStack.top.value !== min) {
          let currNode = stack.top;
          let currMax = min;

          while (currNode.next !== null) {
               if (currNode.value > currMax && currNode.value < newStack.top.value) {
                    currMax = currNode.value;
               }
               currNode = currNode.next
          }
          if (currNode.value > currMax && currNode.value < newStack.top.value) {
               currMax = currNode.value
          }
          newStack.push(currMax)
     }
     return newStack
}

module.exports = {
     peek,
     isEmpty,
     display,
     is_palindrome,
     matchParen,
     sort
}