class LinkedList {
    constructor() {
        this.root = null
        this.totalItems = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(this.root !== null){
            let head = this.root
            let currentIndex = 0

            while(head){  // ✅ Changed from head.next to head
                if(currentIndex === index){
                    return head.value
                }
                head = head.next
                currentIndex++
            }
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.root = {
            value: val,
            next: this.root
        }
        this.totalItems += 1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        if(!this.root){  // ✅ Handle empty list case
            this.root = {
                value: val,
                next: null
            }
            this.totalItems += 1
            return
        }
        
        let head = this.root

        while(head){
            if(!head.next){
                head.next = {
                    value: val,
                    next: null
                }
                break
            }
            head = head.next
        }

        this.totalItems += 1
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(this.root){
            let head = this.root
            let prevNode = null
            let currentIndex = 0
            
            while(head){
                if(currentIndex === index){
                    if(prevNode){  // ✅ Removing middle or last node
                        prevNode.next = head.next
                    } else {  // ✅ Removing first node
                        this.root = head.next
                    }
                    this.totalItems -= 1
                    return true
                }
                
                prevNode = head
                head = head.next
                currentIndex += 1
            }
        }
        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let head = this.root
        const values = []

        while(head){
           values.push(head.value)
           head = head.next
        }

        return values
    }
}