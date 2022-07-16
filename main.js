const q = require(`./queue.js`)


let queue = new q.Queue()

queue.enqueue(469)
queue.enqueue("also a string")
queue.enqueue({ o: [], s: "boo!" })
queue.enqueue(null)

queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.dequeue())
