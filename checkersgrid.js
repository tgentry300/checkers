function CheckersGrid(config) {
    Grid.call(this, config)
}
CheckersGrid.prototype = Object.create(Grid.prototype)
CheckersGrid.prototype.constructor = CheckersGrid
    
CheckersGrid.prototype.createColumn = function () {
            this.cellArray = []
            for (let colIndex in this.createGameGridArray()) {
                const colElement = document.createElement("div")
                colElement.classList.add("column")

                this.cellArray.push([])
                this.parentElement.appendChild(colElement)
                for (let cellIndex in this.createGameGridArray()[colIndex]) {
                    const cell = new Cell(colIndex, cellIndex, this.cellWidth, this.cellHeight, this.defaultCellStyleClasses)
                    if ((cellIndex % 2 == 0 && colIndex % 2 == 1) || (cellIndex % 2 == 1 && colIndex % 2 == 0)) {
                        cell.element.classList.add("darkCell")
                    }
                    this.cellArray[colIndex].push(cell)
                    colElement.appendChild(cell.element)
                }
            }
        }
    


