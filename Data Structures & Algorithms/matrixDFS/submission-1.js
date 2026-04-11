class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        let targetRow = grid.length - 1
        let targetCol = grid[0].length - 1

        if (grid[0][0] === 1 || grid[targetRow][targetCol] === 1) return 0

        let paths = 0

        let visited = new Set();
        let stack = [{ row: 0, col: 0, isBacktrack: false }]

        while(stack.length){
            const {row, col, isBacktrack} = stack.pop()
            const nodeKey = `${row}-${col}`

            if (isBacktrack) {
                visited.delete(nodeKey);
                continue;
            }
            
            if(row === targetRow && col === targetCol){
                paths++
                continue
            }

            visited.add(nodeKey);
            stack.push({ row, col, isBacktrack: true });

            const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

            for(let [rowDirection, colDirection] of directions){
                let nextRow = row + rowDirection
                let nextCol = col + colDirection
                let nextKey = `${nextRow}-${nextCol}`
                
                if (
                    nextRow >= 0 && nextRow <= targetRow && 
                    nextCol >= 0 && nextCol <= targetCol && 
                    grid[nextRow][nextCol] !== 1 && 
                    !visited.has(nextKey)
                ) {
                    stack.push({ row: nextRow, col: nextCol, isBacktrack: false });
                }
            }
        }

        return paths
    }
}
