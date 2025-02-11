//board object

const Board = (function () {
    //create '3x3' board filles will null
    const gameState = Array(9).fill(null)

    function logGame () {
        console.log(gameState[0], gameState[1], gameState[2])
        console.log(gameState[3], gameState[4], gameState[5])
        console.log(gameState[6], gameState[7], gameState[8])
    }

    function assignSymbol(currentPlayer, arrayLocation){
        //check if location is already marked
        if(gameState[arrayLocation] === null){
            //assign symbol
            gameState[arrayLocation] = currentPlayer.symbol
        } else {
            console.log('position already taken')
            // TODO prevent player change
            
        }
    }

    function resetBoard () {
        gameState.fill(null)
    }

    return {gameState, assignSymbol, logGame, resetBoard}
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

    function changeCurrentPlayer() {
        currentPlayer = currentPlayer === player1 ? player2 : player1
    }

    setGameEnd(gameSituation) {
        gameHasEnded = gameSituation;
    }

    const winningResults = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3 ,6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    //Based on 3x3 board related to array positioning
    //0 1 2
    //3 4 5
    //6 7 8
    
    function tieChecker(BoardGameState) {
        for(let i = 0; i < BoardGameState.length; i++){
            if(BoardGameState[i] === null){
                return false
            }
        }
        return true
    }

    const winConChecker = (BoardGameState, currentPlayer) => { 
        //check winning condition
        for (value of winningResults){
            //descontruct each possible winning condition positioning from reference array
            const [a, b ,c] = value;
            //check if current player has won
            if (BoardGameState[a] !== null && BoardGameState[a] === BoardGameState[b] && BoardGameState[b] === BoardGameState[c]){
                //declare current player winner
                console.log(`${currentPlayer.name} is the WINNER`)
                setGameEnd(true);
                return 
            }
        }
        setGameEnd(false)
        return   
    }
    
    //TODO - start game function

    const runTurn = (boardPosition) => {
        //current player assigns marker
        Board.assignSymbol(currentPlayer, boardPosition);

        //game check winCon
        if(winConChecker(Board.gameState, currentPlayer)){
            console.log(`${currentPlayer.name} is the winner!!!`)
            setGameEnd(true);
        } 
        
        //check if it is a tie
        else if (tieChecker(Board.gameState)){
            console.log('Game is a tie')
            setGameEnd(true);
        }

        if (gameHasEnded){
            console.log(`End of the game`)
        } else {
            changeCurrentPlayer(currentPlayer);
        }
        return Board.logGame()

    }
  
    return {currentPlayer, winConChecker, changeCurrentPlayer, runTurn}
})()


