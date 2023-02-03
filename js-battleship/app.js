const optionContainer = document.querySelector(".option-container");
const flipButton = document.querySelector("#flip-button");

function flip() {
    console.log("options: ", optionContainer.children);
}

flipButton.addEventListener("click", flip);
