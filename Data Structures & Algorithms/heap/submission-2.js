class MinHeap {
    constructor() {
        this.heap = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        this.bubbleUp()
    }

    /**
     * @return {number}
     */
    pop() {
        if (!this.heap.length) return -1
        if(this.heap.length === 1) return this.heap.pop()

        const element = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()

        return element
    }

    /**
     * @return {number}
     */
    top() {
       if (!this.heap.length) return -1
       return this.heap[0] 
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = nums

        // we start at the last parent node and walk backwards
        for(let i = Math.floor((this.heap.length / 2) - 1); i >= 0; i--){
            this.bubbleDown(i)
        }
    }

    bubbleUp() {
        // get the parent of the last element index
        let index = this.heap.length - 1
        let parent = Math.floor((index - 1) / 2)
        
        while(index && this.heap[parent] > this.heap[index]){
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]

            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }

    bubbleDown(index = 0) {
        const length = this.heap.length;

        while(index < this.heap.length){
            let smallest = index
            const left = 2 * index + 1
            const right = 2 * index + 2

            // compare parent with left child
            if(left < length && this.heap[left] < this.heap[index]){
                smallest = left
            }

            // compare smallest with right child
            if(right < length && this.heap[right] < this.heap[smallest]){
                smallest = right
            }

            // escape condition
            if(index === smallest) break;

            // inline swap!
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]

            index = smallest
        }
    }
}
