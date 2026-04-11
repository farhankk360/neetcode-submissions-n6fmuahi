class MyDeque {
    constructor() {
        this.queue = []
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.queue.length === 0
    }

    /**
     * @param {number} value
     */
    append(value) {
        this.queue.push(value)
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        this.queue.unshift(value)
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.queue.length) return -1
        return this.queue.pop()
    }

    /**
     * @return {number}
     */
    popleft() {
        if(!this.queue.length) return -1
        return this.queue.shift()
    }
}
