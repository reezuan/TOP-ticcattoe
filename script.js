const initBoard = (function () {
    const cells = document.querySelectorAll(".cell");
    const controller = new AbortController();
    const {signal} = controller;

    cells.forEach(cell => {
        cell.addEventListener("click", event => {
            const selectedCell = event.target;
            
            gameBoard.markCell(selectedCell.getAttribute("data-cell-index"));

            /* if (gameBoard.markCell(selectedCell.getAttribute("data-cell-index")) == false) {
                return;
            }; */

            if (gameBoard.checkWinner() == true) {
                /* game.stopGame(); */
                controller.abort();
            } else if (gameBoard.checkWinner() == false) {
                game.changePlayerTurn();
            }
        }, {once: true, signal});
    });
})();

const gameBoard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];

    function markCell(cellIndex) { // This function will mark a cell when the player clicks on it.
        const chosenCellIndex = Number(cellIndex) - 1;
        
        /* if (board[chosenCellIndex]) {
            console.log("hello again");
            return false;
        }; */
        
        if (game.getCurrentPlayer() === "player1") {
            board[chosenCellIndex] = "X";
        } else if (game.getCurrentPlayer() === "player2") {
            board[chosenCellIndex] = "O";
        };
        
        console.log(board);
        return true;
    };

    function checkWinner() { // This function will check if there is a winner yet.
        let gameOver = false;
        
        const row1 = [board[0], board[1], board[2]];
        const row2 = [board[3], board[4], board[5]];
        const row3 = [board[6], board[7], board[8]];
        const column1 = [board[0], board[3], board[6]];
        const column2 = [board[1], board[4], board[7]];
        const column3 = [board[2], board[5], board[8]];
        const diagonal1 = [board[0], board[4], board[8]];
        const diagonal2 = [board[2], board[4], board[6]];

        const itemsToCheck = [row1, row2, row3, column1, column2, column3, diagonal1, diagonal2];

        for (let i = 0; i < itemsToCheck.length; i++) {
            if (itemsToCheck[i].includes("")) {
                continue;
            };

            if (itemsToCheck[i].every(marker => marker === itemsToCheck[i][0])) {
                gameOver = true;
                break;
            };
        };

        return gameOver;
    };

    function renderBoard() {
        // This function will iterate over each piece of the board and populate the cell with an image if it is 'marked'.
    };

    return {markCell, checkWinner, renderBoard};
})();

const game = (function () {
    let currentPlayer = "player1";

    function getCurrentPlayer() {
        return currentPlayer;
    };

    function changePlayerTurn() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else if (currentPlayer === "player2") {
            currentPlayer = "player1";
        }
    };

    function stopGame() { // This function will stop the game (e.g. ensure no other cells can be clicked).
        const gameBoardCells = document.querySelectorAll(".cell");

        gameBoardCells.forEach(cell => {
            cell.removeEventListener("click", );
        });
        
        console.log("stop the game");
    };

    return {getCurrentPlayer, changePlayerTurn, stopGame};
})();

function createPlayer() {
    const marker = "";
};