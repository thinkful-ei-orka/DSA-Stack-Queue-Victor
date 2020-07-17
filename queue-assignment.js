const { Queue } = require('./queue');
const { DoubleQueue } = require('./double-queue');

const {
     peek,
     isEmpty,
     display,
     bank
} = require('./queue-functions');

function test() {
     const starTrekQ = new Queue();

     starTrekQ.enqueue('Kirk')
     starTrekQ.enqueue('Spock')
     starTrekQ.enqueue('Uhura')
     starTrekQ.enqueue('Sulu')
     starTrekQ.enqueue('Checkov')
     display(starTrekQ)

     starTrekQ.dequeue();
     starTrekQ.dequeue();
     display(starTrekQ)

     console.log(isEmpty(starTrekQ));
};

test();

function doubleTest() {
     const starTrekDQ = new DoubleQueue
     starTrekDQ.enqueue('Kirk')
     starTrekDQ.enqueue('Spock')
     starTrekDQ.enqueue('Uhura')
     starTrekDQ.enqueue('Sulu')
     starTrekDQ.enqueue('Checkov')

     display(starTrekDQ)

     starTrekDQ.dequeue()
     starTrekDQ.dequeue()

     // peek(starTrekDQ)

     console.log(isEmpty(starTrekDQ));
};

doubleTest();

function bankTest() {
     const bankQ = new Queue();

     bankQ.enqueue('Mark')
     bankQ.enqueue('Ethan')
     bankQ.enqueue('Amy')
     bankQ.enqueue('Evan')
     bankQ.enqueue('Chica')
     bankQ.enqueue('Spencer')
     bankQ.enqueue('Bodhi')
     bankQ.enqueue('Unus')
     bankQ.enqueue('Annus')

     bank(bankQ);
}

bankTest();