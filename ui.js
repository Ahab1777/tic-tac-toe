import { Board, GameController } from "./game-logic.js";

const buttonNode = document.querySelectorAll('.cell-button')
const resetButton = document.querySelector('.reset-button')
const currentPlayerDisplay = document.querySelector('.current-player')

buttonNode.forEach(button => button.addEventListener('click', (e) => {
    const position = Number(button.dataset.position)
    GameController.runTurn(position);
    updateCurrentPlayerDisplay()
    console.log(`Position ${position} clicked`)
}))

resetButton.addEventListener('click', () => {
    Board.resetBoard()
    updateCurrentPlayerDisplay()
})

//TODO get current player and display it

function updateCurrentPlayerDisplay() {
    currentPlayerDisplay.textContent = GameController.getCurrentPlayerName();
}

