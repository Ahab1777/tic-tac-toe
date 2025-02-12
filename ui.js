import { Board, GameController } from "./game-logic.js";

const buttonNode = document.querySelectorAll('.cell-button')
const resetButton = document.querySelector('.reset-button')

buttonNode.forEach(button => button.addEventListener('click', (e) => {
    const position = Number(button.dataset.position)
    GameController.runTurn(position);
    console.log(`Position ${position} clicked`)
}))

resetButton.addEventListener('click', () => {
    Board.resetBoard()
})