function Player(color, grid) {
this.color = color
this.grid = grid
    //move checker to clicked space



}
Player.prototype.setRedPieces = function () {
    darkCells = document.getElementsByClassName("darkCell")
    darkCellsArray = Array.prototype.slice.call(darkCells)
    let redSpaces = darkCellsArray.slice(0, 12)

    for (let redSpace of redSpaces) {
        let redCircle = document.createElement("img")
        redCircle.setAttribute("src", "redchecker.png")
        redCircle.setAttribute("id", "redCircle")
        redSpace.appendChild(redCircle)
        redSpace.containsChecker = true

    }
}



Player.prototype.setBlackPieces = function () {

    let blackSpaces = darkCellsArray.slice(-12)

    for (let blackSpace of blackSpaces) {
        let blackCircle = document.createElement("img")
        blackCircle.setAttribute("src", "blackchecker.png")
        blackCircle.setAttribute("id", "blackCircle")
        blackSpace.appendChild(blackCircle)
        blackSpace.containsChecker = true
    }
}


Player.prototype.movePiece = function (event) {
    if(!event.target.classList.contains("cell")) return;
    event.target.appendChild(blackCircle)



        
    


}
Player.prototype.assignEventListeners = function () {
    this._boundClickListener = this.eventListeners.click.bind(this)

    this.main.addEventListener("click", this._boundClickListener)
}

Player.prototype.removeEventListeners = function () {
    this.main.removeEventListener("click", this._boundClickListener)
}