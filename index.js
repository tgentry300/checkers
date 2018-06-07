const gridConfig = {
    numberOfColumns: 8, 
    numberOfCellsInColumn: 8, 
    parentElement: document.querySelector("main"),
    cellWidth: "5rem",
    cellHeight: "5rem",
    defaultCellStyleClasses: ["unclicked"]
}
const newGame = new Game(gridConfig)
