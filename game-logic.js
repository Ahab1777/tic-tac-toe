//board object

const Board = (function () {
    //create '3x3' board filles will null
    const gameState = Array(9).fill(null)

    //DELETE - exposing gameState temporarily for debugging 
    window.gameState = gameState

    function getGameState() {
        return [...gameState]
    }

    function logGame () {
        console.log(gameState[0], gameState[1], gameState[2])
        console.log(gameState[3], gameState[4], gameState[5])
        console.log(gameState[6], gameState[7], gameState[8])
    }

    function assignSymbol(currentPlayer, arrayLocation){
        if(gameState[arrayLocation] !== null){ //check if location is already marked
            console.log('position already taken')
            return false //return false to cancel runTurn function to proceed
        } 
        gameState[arrayLocation] = currentPlayer.symbol;
        return true //return true to proceed with runTurn function
    }

    function resetBoard () {
        gameState.fill(null)
    }

    return {getGameState, assignSymbol, logGame, resetBoard}
})()

const Player = (name, symbol) => {
    return {name, symbol}
}

const GameController = (() => {
    let player1, player2, currentPlayer, gameHasEnded

    //TODO - function to assign players names
    player1 = Player('Leo', 'x')
    player2 = Player('Tay', 'o')
    currentPlayer = player1;
    gameHasEnded = false

    function changeCurrentPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1
    }

    function setGameEnd(gameSituation) {
        gameHasEnded = gameSituation;
    }

    function getCurrentPlayerName() {
        return currentPlayer.name;
    }

    //DELETE - exposing getCurrentPlayerName temporarily for debugging
    window.getCurrentPlayerName =  getCurrentPlayerName()

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
            setGameEnd(true);
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
  
    return {getCurrentPlayerName, currentPlayer, winConChecker, changeCurrentPlayer, runTurn}
})()


export {Board, GameController};

