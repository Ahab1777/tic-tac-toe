//board object

const Board = (function () {
    const gameboard = Array(9).fill(null)

    function logGame () {
        console.log(gameboard)
    }

    function markSymbol (symbol, position) {
        gameboard[position] = symbol
    }

    function resetBoard () {
        gameboard.fill(null)
    }

    return {gameboard, markSymbol, logGame, resetBoard}
})()

const Player = (name, symbol) => {
    return {name, symbol}
}

const GameController = (() => {
    let player1, player2, currentPlayer, gameHasEnded

    player1 = Player('Leo', 'x')
    player2 = Player('Tay', 'o')

    const winConChecker = (Array, player1, player2) {
        //check winning condition

        //check winning player


    //0 1 2
    //3 4 5
    //6 7 8    
    }


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

