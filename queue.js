class Queue {
    #arr
    constructor() {
        this.#arr = []
    }
    enqueue = (item) => { this.#arr.push(item) }
    dequeue = () => { return this.#arr.shift() }
    print = () => { console.log(this.#arr) }
}
module.exports = {
    Queue
}