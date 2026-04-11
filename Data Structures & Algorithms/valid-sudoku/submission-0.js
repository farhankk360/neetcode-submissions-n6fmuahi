class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const gridSize = 9
        const boxSize = 3
        
        const rows = new Array(gridSize).fill(0).map(() => new Set());
        const cols = new Array(gridSize).fill(0).map(() => new Set());
        const boxes = new Array(gridSize).fill(0).map(() => new Set());

        // initialize the sets
        for(let row = 0; row < gridSize; row++){
            for(let col = 0; col < gridSize; col++){
                const cellValue = board[row][col]

                if(cellValue !== '.'){
                    const boxIndex = Math.floor(row / boxSize) * boxSize + Math.floor(col / boxSize);
                    
                     if (rows[row].has(cellValue) || 
                        cols[col].has(cellValue) || 
                        boxes[boxIndex].has(cellValue)
                    ) {
                        return false;
                    }

                    rows[row].add(cellValue)
                    cols[col].add(cellValue)
                    boxes[boxIndex].add(cellValue)
                }
            }
        }

        return true
    }
}
