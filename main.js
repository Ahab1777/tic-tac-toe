//board object

const Board = (function () {
    const gameState = Array(9).fill(null)

    function logGame () {
        console.log(gameState)
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

    player1 = Player('Leo', 'x')
    player2 = Player('Tay', 'o')
    currentPlayer = player1;

    const winningResults = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3 ,6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    //0 1 2
    //3 4 5
    //6 7 8  

    const winConChecker = (BoardGameState, currentPlayer) => { 
        //check winning condition
        for (value of winningResults){
            //descontruct each possible winning condition positioning from reference array
            const [a, b ,c] = value;
            if (BoardGameState[a] !== null && BoardGameState[a] === BoardGameState[b] && BoardGameState[b] === BoardGameState[c]){
                //check if symbol matches current player
                if(currentPlayer.symbol === BoardGameState[a]){
                    //declare current player winner
                    console.log(`${currentPlayer.name} won`)
                } else {
                    console.log('Tay/P2 has won')
                }
                return gameHasEnded = true
            }
        }
        return gameHasEnded = false;  
    }
    //assigning points
    //change player
    function computePlay() {
        if(gameHasEnded){
            
        }
    }

    //start game
    function initGame() {
        currentPlayer = player1;
        gameHasEnded = false
        Board.resetBoard()
        //gameloop
            //player marks board
        // while(gameHasEnded = false){
            
        
        // }
            //board checks current state
            //currentPlayer changes
        
    }


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

