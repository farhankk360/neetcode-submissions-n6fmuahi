class TreeNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeMap {
    constructor() {
        this.root = null
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        let newNode = new TreeNode(key, val)

        if(!this.root) {
            this.root = newNode
            return;
        }

        let currentNode = this.root

        while(currentNode){
           if(key < currentNode.key){
             if(!currentNode.left){
                currentNode.left = newNode
                return;
             }

            currentNode = currentNode.left
           } else if(key > currentNode.key) {
             if(!currentNode.right){
                currentNode.right = newNode
                return;
             }

             currentNode = currentNode.right
           }  else {
                currentNode.val = val;
                return;
           }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        let current = this.root

        while(current){
            if (current.key === key) return current.val

            if(key < current.key){
                current = current.left
            } else {
                current = current.right
            }
        }

       return -1 
    }

    /**
     * @returns {number}
     */
    getMin() {
        let current = this.root

        while(current && current.left){
            current = current.left
        }

        return current && current.val !== null ? current.val : -1
    }

    /**
     * @returns {number}
     */
    getMax() {
        let current = this.root

        while(current && current.right){
            current = current.right
        }

        return current && current.val !== null ? current.val : -1 
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        let current = this.root
        let prevNode = null

        while(current && current.key !== key){
            prevNode = current

            if(key > current.key){
                current = current.right
            } else {
                current = current.left
            }
        }

        if(!current) return null

        // handle node with two childs
        if(current.left && current.right){
            // get the left most child from the right
            let successor = current.right
            let prevSuccessor = current

            while(successor.left){
                prevSuccessor = successor
                successor = successor.left
            }

            // copy successor data to the node we want to delete
            current.key = successor.key
            current.val = successor.val

            // delete the node
            current = successor
            prevNode = prevSuccessor
        }

        // grab the only child or null if leaf node
        let child = current.left ? current.left : current.right

        // if prevNode is null that means its the first node in the tree
        if(!prevNode){
            this.root = child

            // link the node with parent
        } else if(prevNode.left === current){
            prevNode.left = child
        } else {
            prevNode.right = child
        }
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        let results = []

        function dfs(node){
            if(!node) return null

            dfs(node.left)
            results.push(node.key)
            dfs(node.right)
        }

        dfs(this.root)

        return results
    }
}
