function peek(queue) {
     if (!queue.first) {
     return null;
     }
     else return queue.first.value;
}

function isEmpty(queue) {
     if (queue.first === null) {
          return true;
     }
     else return false
}

function display(queue) {
     let currNode = queue.first;
     if (currNode === null) {
          console.log('Empty')
     }
     while (currNode.next !== null) {
          console.log(currNode.value);
          currNode = currNode.next
     }
     console.log(currNode.value)
}

function bank(queue) {
     while(queue.first) {
          let person = queue.dequeue();
          let randomNum = Math.random();
          if (randomNum < .25) {
               queue.enqueue(person);
               console.log(`${person}'s paperwork isn't quite right, moved to the end.`)
          }
          else {
               console.log(`${person} served with a smile`)
          }
     }
     console.log('All customers served.')
}

module.exports = {
     peek,
     isEmpty,
     display,
     bank
}