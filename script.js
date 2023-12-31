const initBoard = (function () {
    const cells = document.querySelectorAll(".cell");
    const reset = document.querySelector(".reset");

    function setGameEventHandlers() {
        cells.forEach(cell => {
            cell.addEventListener("click", progressGame, {once: true});
        });
    };

    function progressGame() {
        gameBoard.markCell(this.getAttribute("data-cell-index"));

        if (gameBoard.checkWinner() == true) {
            gameBoard.renderBoard();
            cells.forEach(cell => {
                cell.removeEventListener("click", progressGame, {once: true});
            });
            game.declareWinner();
        } else if (gameBoard.checkWinner() == false) {
            gameBoard.renderBoard();
            game.changePlayerTurn();
        };
    };

    reset.addEventListener("click", () => {
        gameBoard.resetBoard();
        game.resetTurnMessage();
        game.resetFirstPlayer();
        setGameEventHandlers();
    });

    setGameEventHandlers();
})();

const gameBoard = (function () {
    const board = ["", "", "", "", "", "", "", "", ""];

    function markCell(cellIndex) { // This function will mark a cell when the player clicks on it.
        const chosenCellIndex = Number(cellIndex) - 1;
        
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

    function renderBoard() { // This function will iterate over each piece of the board and populate the cell with an image if it is 'marked'.
        for (let i = 0; i < board.length; i++) {
            const gameBoardCell = document.querySelector(`[data-cell-index="${i + 1}"]`);

            if (board[i] == "X") {
                gameBoardCell.innerHTML = `<img src="assets/2-leg-cat.png" alt="">`;
            } else if (board[i] == "O") {
                gameBoardCell.innerHTML = `<img src="assets/flower-cat.png" alt="">`;
            };
        };
    };

    function resetBoard() {
        const cells = document.querySelectorAll(".cell");
        
        cells.forEach(cell => {
            cell.innerHTML = "";
        });

        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        };
    };

    return {markCell, checkWinner, renderBoard, resetBoard};
})();

const game = (function () {
    let currentPlayer = "player1";
    const playerOne = document.querySelector(".player-one");
    const playerTwo = document.querySelector(".player-two");

    function getCurrentPlayer() {
        return currentPlayer;
    };

    function changePlayerTurn() {
        const turnMessage = document.querySelector(".turn-message");

        const newTurnMessage = document.createElement("p");
        newTurnMessage.classList.add("turn-message");
        newTurnMessage.textContent = `It's your turn, Player ${currentPlayer == "player1" ? "2" : "1"}!`;
        
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            const removeTurnMessage = playerOne.removeChild(turnMessage);
            playerTwo.appendChild(newTurnMessage);
        } else if (currentPlayer === "player2") {
            currentPlayer = "player1";
            const removeTurnMessage = playerTwo.removeChild(turnMessage);
            playerOne.appendChild(newTurnMessage);
        };
    };

    function declareWinner() {
        const turnMessage = document.querySelector(".turn-message");
        turnMessage.textContent = `Player ${currentPlayer == "player1" ? "1" : "2"} wins!`;
    };
    
    function resetFirstPlayer() {
        currentPlayer = "player1";
    };

    function resetTurnMessage() {
        const turnMessage = document.querySelector(".turn-message");

        const newTurnMessage = document.createElement("p");
        newTurnMessage.classList.add("turn-message");
        newTurnMessage.textContent = `You go first, Player 1.`;

        if (currentPlayer === "player1") {
            const removeTurnMessage = playerOne.removeChild(turnMessage);
        } else if (currentPlayer === "player2") {
            const removeTurnMessage = playerTwo.removeChild(turnMessage);
        }

        playerOne.appendChild(newTurnMessage);
    };

    return {getCurrentPlayer, changePlayerTurn, declareWinner, resetFirstPlayer, resetTurnMessage};
})();

function createPlayer() {
    const marker = "";
};