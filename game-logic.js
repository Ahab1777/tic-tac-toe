//board object

const Board = (function () {
    //create '3x3' board filles will null
    const gameState = Array(9).fill(null)

    function getGameState() {
        return [...gameState]
    }

    let infoDisplayMessage = ''

    function setInfoDisplayMessage(message) {
        infoDisplayMessage = message
        return infoDisplayMessage
    }

    function getInfoDisplayMessage() {
        return infoDisplayMessage;
    }

    function logGame () {
        console.log(gameState[0], gameState[1], gameState[2])
        console.log(gameState[3], gameState[4], gameState[5])
        console.log(gameState[6], gameState[7], gameState[8])
    }

    function assignSymbol(currentPlayer, arrayLocation){
        if(gameState[arrayLocation] !== null){ //check if location is already marked
            console.log('position already taken')
            Board.setInfoDisplayMessage('Position already taken, chose another one')
            return false //return false to cancel runTurn function to proceed
        } 
        gameState[arrayLocation] = currentPlayer.symbol;
        Board.setInfoDisplayMessage('')
        return true //return true to proceed with runTurn function
    }

    function resetBoard () {
        // setInfoDisplayMessage(`${GameController.getCurrentPlayerName()} turn`)
        gameState.fill(null)
    }

    return {getGameState, assignSymbol, logGame, resetBoard, getInfoDisplayMessage, setInfoDisplayMessage}
})()

const Player = (name, symbol) => {
    return {name, symbol}
}

const GameController = (() => {
    let player1, player2, currentPlayer, gameHasEnded

    currentPlayer = player1;
    gameHasEnded = false

    function changeCurrentPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1
    }

    function getCurrentPlayerName() {
        return currentPlayer.name;
    }

    function setGameEnd(gameSituation) {
        gameHasEnded = gameSituation;
    }

    function displayPlayersNames() {
        return `${player1.name} vs ${player2.name}`
    }

    function setMatchPlayers(player1Name, player2Name){
        player1 = Player(player1Name, 'x')
        player2 = Player(player2Name, 'o')
        currentPlayer = player1;
    }

    //array of winning board states
    const winningResults = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3 ,6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    //Based on 3x3 board related to array positioning
    //0 1 2
    //3 4 5
    //6 7 8
    
    //check if game is a tie
    function tieChecker(BoardGameState) {
        return BoardGameState.every(item => item !== null);
    }

    //check winning condition
    const winConChecker = (BoardGameState, currentPlayer) => { 
        for (const [a, b ,c] of winningResults){ //deconstruct each possible winning condition from  reference array
            if (BoardGameState[a] !== null && BoardGameState[a] === BoardGameState[b] && BoardGameState[b] === BoardGameState[c]){ //check if current player has won
                Board.setInfoDisplayMessage(`${currentPlayer.name} is the winner!!!`)
                return true
            }
        }
        return false  
    }

    function endGame() {
        currentPlayer = player1;
        gameHasEnded = false
        Board.resetBoard()
    }
    
    const runTurn = (boardPosition) => {
        
        if(!Board.assignSymbol(currentPlayer, boardPosition)){ //assign marker and check if it is a valid play
            return
        }

        if(winConChecker(Board.getGameState(), currentPlayer)){ //game check winCon
            console.log(`${currentPlayer.name} is the winner!!!`)
            setGameEnd(true);
        } 
        
        //check if it is a tie
        else if (tieChecker(Board.getGameState())){
            console.log('Game is a tie')
            Board.setInfoDisplayMessage('Game is a tie')
            setGameEnd(true);
            endGame()
        }
        //end game or change to next player
        if (gameHasEnded){
            console.log(`End of the game`)
            endGame()
        } else {
            changeCurrentPlayer();
        }
        return Board.logGame()

    }
    //start game function - request names - set current player and start match
  
    return {getCurrentPlayerName, currentPlayer, winConChecker, changeCurrentPlayer, runTurn, setMatchPlayers, displayPlayersNames}
})()


export {Board, GameController};

