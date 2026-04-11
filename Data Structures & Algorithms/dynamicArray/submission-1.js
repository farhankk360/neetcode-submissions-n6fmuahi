class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.length = 0
        this.array = new Array(this.capacity).fill(0)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length === this.capacity){
            this.resize()
        }
        this.array[this.length] = n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.length > 0) {
            this.length--;
        }
        return this.array[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity).fill(0);
        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.array[i];
        }
        this.array = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
