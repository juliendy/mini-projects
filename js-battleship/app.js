const gamesBoardContainer = document.querySelector("#gamesboard-container");
const optionContainer = document.querySelector(".option-container");
const flipButton = document.querySelector("#flip-button");

// Option choosing
let angle = 0;
function flip() {
    const optionShips = Array.from(optionContainer.children);
    angle = angle === 0 ? 90 : 0;
    optionShips.forEach(
        (optionShips) => (optionShips.style.transform = `rotate(${angle}deg)`)
    );
}

// Creating Boards
const width = 10;

function createBoard() {
    const gameBoardContainer = document.createElement("div");
    gameBoardContainer.classList.add("game-board");
    gameBoardContainer.style.backgroundColor = "pink";

    gamesBoardContainer.append(gameBoardContainer);
}

createBoard()
flipButton.addEventListener("click", flip);
