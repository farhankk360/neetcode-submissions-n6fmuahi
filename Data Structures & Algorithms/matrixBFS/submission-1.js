class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const targetRow = grid.length - 1
        const targetCol = grid[0].length - 1

        if (grid[0][0] === 1 || grid[targetRow][targetCol] === 1) return -1

        const visited = new Set()
        visited.add(`0-0`)

        const queue = [{ row: 0, col: 0 }]

        let path = 0

        while(queue.length){
            let size = queue.length

            for(let i = 0; i < size; i++){
                const { row, col } = queue.shift()

                if(row === targetRow && col === targetCol){
                    return path
                }

                const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]

                for(let [rowDirection, colDirection] of neighbors){
                    const nextRow = row + rowDirection
                    const nextCol = col + colDirection
                    const nextKey = `${nextRow}-${nextCol}`
                    
                    if (
                        nextRow >= 0 && nextRow <= targetRow && 
                        nextCol >= 0 && nextCol <= targetCol && 
                        grid[nextRow][nextCol] === 0 && 
                        !visited.has(nextKey)
                    ) {
                        queue.push({ row: nextRow, col: nextCol })
                        visited.add(nextKey)
                    }
                }

            }

            path++
        }

        return -1
    }
}