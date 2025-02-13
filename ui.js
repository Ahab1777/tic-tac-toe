import { Board, GameController } from "./game-logic.js";



const DisplayController = (() => {
    const buttonNodes = document.querySelectorAll('.cell-button')
    const resetButton = document.querySelector('.reset-button')
    const currentPlayerDisplay = document.querySelector('.current-player')
    const playersNamesDisplay = document.querySelector('.players-names')
    const changeNamesButton = document.querySelector('.change-players-names')
    const gameStatusDisplay = document.querySelector('.game-status')
    
    const startGame = () => {
        buttonNodes.forEach(button => button.addEventListener('click', handleButtonClick))
        resetButton.addEventListener('click', handleReset)
        changeNamesButton.addEventListener('click', handlePlayerNameChange)
        setStandardPlayerNames()
    }

    const refreshBoard = () => {
        buttonNodes.forEach(button => button.textContent = Board.getGameState()[button.dataset.position])
    }

    const setStandardPlayerNames = () => {
        GameController.setMatchPlayers('Player 1', 'Player 2')
        playersNamesDisplay.textContent = GameController.displayPlayersNames()
    }

    const handlePlayerNameChange = () => {
        let player1Name = prompt('Enter player 1 name:')
        let player2Name = prompt('Enter player 2 name:')
        if(player1Name === null) {
            player1Name = 'Player 1'
        }
        if(player2Name === null) {
            player2Name = 'Player 2'
        }
        GameController.setMatchPlayers(player1Name, player2Name)
        playersNamesDisplay.textContent = `${player1Name} vs ${player2Name}`
    }

    const handleReset = () => {
        Board.resetBoard()
        updateCurrentPlayerDisplay()
        refreshBoard()
    }

    const refreshGameStatus = () => {
        gameStatusDisplay.textContent = Board.getInfoDisplayMessage()
    }

    const handleButtonClick = (e) => {
        const position = Number(e.target.dataset.position)
        GameController.runTurn(position);
        updateCurrentPlayerDisplay()
        refreshBoard()
        refreshGameStatus()
        console.log(`Position ${position} clicked`)//TODO remove
    }
    
    const updateCurrentPlayerDisplay = () => {
        currentPlayerDisplay.textContent = GameController.getCurrentPlayerName();
    }
    
    return {startGame}
    
})()

DisplayController.startGame()


//TODO function to display current board state
