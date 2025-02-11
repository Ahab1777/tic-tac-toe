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
        //assign symbol
        if(gameState[arrayLocation] === null){
            gameState[arrayLocation] = currentPlayer.symbol
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
        return currentPlayer = currentPlayer === player1 ? player2 : player1
    }

    const winningResults = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3 ,6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    //Based on 3x3 board related to array positioning
    //0 1 2
    //3 4 5
    //6 7 8
    
    function tieChecker(BoardGameState) {
        for(i = 0; i < BoardGameState.length; i++){
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
                return gameHasEnded = true
            }
        }
        return gameHasEnded = false;  
    }
    //TODO - start game function

    //TODO - turn function
    const runTurn = (boardPosition) => {
        //current player assigns marker
        Board.assignSymbol(currentPlayer, boardPosition);
        //check for tie
        tieChecker(Board.gameState)
        //game check winCon
        winConChecker(Board.gameState, currentPlayer)
        //if someone win, game ends
        if (gameHasEnded){
            console.log(`${currentPlayer.name} has won!`)
        } else {
            changeCurrentPlayer(currentPlayer);
        }
        return Board.logGame()

    }
  
    return {currentPlayer, winConChecker, changeCurrentPlayer, runTurn}
})()



//wincon checkcer do deepseek


//     const checkWin = () => {
//         const winningCombinations = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//             [0, 4, 8], [2, 4, 6]             // Diagonals
//         ];

//         const board = Gameboard.getBoard();
//         for (const combo of winningCombinations) {
//             const [a, b, c] = combo;
//             if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//                 return true; // Win
//             }
//         }
//         return false; // No win
//     };

//     const checkDraw = () => {
//         return Gameboard.getBoard().every(cell => cell !== null);
//     };

