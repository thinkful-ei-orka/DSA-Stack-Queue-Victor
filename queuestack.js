const Stack = require('./stack')

class QueueStack extends Stack {
     constructor() {
          super();
          this.first = this.top;
          this.last = null;
     }

     enqueue(item) {
          if (this.first === null) { 
               this.push(item);
               this.last = this.top;
          }
          else {
               const temp = new Stack();
               while (this.top) {
               temp.push(this.pop())
               }
               temp.push(item);
               while (temp.top) {
                    this.push(temp.pop())
               }
               let currNode = this.top;
               while (currNode.next !== null) {
                    currNode = currNode.next;
               }
               this.last = currNode;
          }
          this.first = this.top;
     }

     dequeue() {
          this.pop;
          this.first = this.top;
     }
}

module.exports = {
     QueueStack
};