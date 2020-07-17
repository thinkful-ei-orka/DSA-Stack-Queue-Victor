const { Queue } = require("./queue");

class dancePartners {
     constructor() {
          this.maleQ = new Queue();
          this.femaleQ = new Queue();
     }

     queuePartner(string) {
          const name = string.split(' ')[1];
          const sex = string[0]

          if (sex === 'M') { this. maleQ.enqueue(name) }
          if (sex === 'F') { this. femaleQ.enqueue(name) }

          if (this.maleQ.first && this.femaleQ.first) {
               const mPartner = this.maleQ.dequeue();
               const fPartner = this.femaleQ.dequeue();
               console.log(`Female dancer is ${fPartner}, and the male dancer is ${mPartner}.`)
          }

          if (this.maleQ.first) {
               let counter = 1;
               let currNode = this.maleQ.first;

               while(currNode.next !== null) {
                    counter++;
               }
               console.log(`There are ${counter} male dancers waiting to dance.`);
          }

          if (this.femaleQ.first) {
               let counter = 1;
               let currNode = this.femaleQ.first;

               while(currNode.next !== null) {
                    counter++;
               }
               console.log(`There are ${counter} female dancers waiting to dance.`);
          }
     }
}

module.exports = {
     dancePartners
};