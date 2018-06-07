function CheckersGrid(config) {
    Grid.call(this, config)
    Player.prototype.setRedPieces()
    Player.prototype.setBlackPieces()
}
CheckersGrid.prototype = Object.create(Grid.prototype)
CheckersGrid.prototype.constructor = CheckersGrid

CheckersGrid.prototype.createColumn = function () {
    this.cellArray = []
    for (let colIndex in this.createGameGridArray()) {
        const colElement = document.createElement("div")
        colElement.dataset.column = colIndex
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


// CheckersGrid.prototype.placePiecesOnGrid = function () {
//     darkCells = document.getElementsByClassName("darkCell")
//     darkCellsArray = Array.prototype.slice.call(darkCells)
//     let redSpaces = darkCellsArray.slice(0, 12)
//     let blackSpaces = darkCellsArray.slice(-12)    
    
//     for (let blackSpace of blackSpaces) {
//         let blackCircle = document.createElement("img")
//         blackCircle.setAttribute("src", "blackchecker.png")
//         blackCircle.setAttribute("id", "blackCircle")
//         blackSpace.appendChild(blackCircle)
//     }
    
//     for(let redSpace of redSpaces){
//         let redCircle = document.createElement("img")
//         redCircle.setAttribute("src", "redchecker.png")
//         redCircle.setAttribute("id", "redCircle")
//         redSpace.appendChild(redCircle)
        
//     }

