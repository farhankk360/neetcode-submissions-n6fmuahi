class Graph {
    constructor() {
        this.graph = {}
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if(!this.graph[src]){
            this.graph[src] = []
        }

        if(!this.graph[src].includes(dst)){
            this.graph[src].push(dst)
        }

    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        console.log({graph: this.graph, src, dst})
        if(this.graph[src]){
            const index = this.graph[src].findIndex(e => e === dst)

            if(index > -1){
                this.graph[src].splice(index, 1)
                return true
            }

            if(!this.graph[src].length){
                delete this.graph[src]
            }
        }
        return false
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        if(!this.graph[src]) return false;
        if (src === dst) return true;

        const visited = new Set();
        const stack = [src]; 

        while(stack.length){
            const currentNode = stack.pop();

            if (currentNode === dst) return true;
            
            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            const neighbors = this.graph[currentNode] || [];
            for (let neighbor of neighbors) {
                stack.push(neighbor);
            }
        }

        return false
    }
}
