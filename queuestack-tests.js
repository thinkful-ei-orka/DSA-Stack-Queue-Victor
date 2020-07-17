const { QueueStack } = require('./queuestack');
const { peek, isEmpty, display } = require('./queue-functions');

const testQ = new QueueStack()

testQ.enqueue('test')
testQ.enqueue('test2')
testQ.enqueue('test3')
testQ.enqueue('test4')
testQ.enqueue('test5')

display(testQ);

testQ.dequeue();
testQ.enqueue('test6');

display(testQ);

console.log(isEmpty(testQ));

console.log(peek(testQ));


