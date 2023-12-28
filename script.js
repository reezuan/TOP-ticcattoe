const initBoard = (function () {
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("click", event => {
            const selectedCell = event.target;
            gameBoard.markCell(selectedCell.getAttribute("data-cell-index"));
        });
    });
})();

const gameBoard = (function () {
    let cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9;

    const row1 = [cell1, cell2, cell3];
    const row2 = [cell4, cell5, cell6];
    const row3 = [cell7, cell8, cell9];

    const column1 = [cell1, cell4, cell7];
    const column2 = [cell2, cell5, cell8];
    const column3 = [cell3, cell6, cell9];

    const diagonal1 = [cell1, cell5, cell9];
    const diagonal2 = [cell3, cell5, cell7];

    function markCell(cellIndex) { // This function will mark a cell when the player clicks on it.
        const chosenCell = document.querySelector(`[data-cell-index="${cellIndex}"]`);
        console.log(chosenCell);
    };

    function checkWinner(currentPlayer) {
        // This function will check if there is a winner yet.
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
    }

    function changePlayerTurn() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else if (currentPlayer === "player2") {
            currentPlayer = "player1";
        }
    }

    function stopGame() {
        // This function will stop the game (e.g. ensure no other cells can be clicked).
    }

    return {getCurrentPlayer, changePlayerTurn, stopGame};
})();

function createPlayer() {
    const marker = "";
}