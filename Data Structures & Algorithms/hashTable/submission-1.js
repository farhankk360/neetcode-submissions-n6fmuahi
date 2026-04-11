class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.table = {}
        this.size = 0
        this.capacity = capacity
    }

    hashFunc(key){
        return key % this.capacity
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        const index = this.hashFunc(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }

        bucket.push({ key, value });
        this.size++;

        if (this.size / this.capacity >= 0.5) {
            this.resize();
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const index = this.hashFunc(key);
        if (!this.table[index]) return -1;

        const bucket = this.table[index];
        
        for (let item of bucket) {
            if (item.key === key) return item.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        const index = this.hashFunc(key);
        if (!this.table[index]) return false;

        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.size--;
                
                // Optional Cleanup: If bucket is empty, delete the key from object
                if(bucket.length === 0) {
                    delete this.table[index];
                }
                return true;
            }
        }
        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }

    /**
     * @return {void}
     */
    resize() {
        const oldTable = this.table
        this.capacity = this.capacity * 2
        this.table = {}
        this.size = 0

        for(const key in oldTable){
            const bucket = oldTable[key]

            for(let i = 0; i < bucket.length; i++){
                const item = bucket[i]
                this.insert(item.key, item.value)
            }
        }
    }
}
