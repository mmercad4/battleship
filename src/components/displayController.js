class DisplayController {
  constructor() {
  }

  displayMainMenu(game) {
    const mainMenuContainer = document.createElement("div");
    mainMenuContainer.className = "mainMenu__container";

    const heading = document.createElement("h1");
    heading.textContent = "Battleship";
    heading.className = "mainMenu__heading";
    mainMenuContainer.appendChild(heading);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.placeholder = "enter your name";
    mainMenuContainer.appendChild(nameInput);

    const startGameButton = document.createElement("button");
    startGameButton.className = "maimMenu__startGameButton";
    startGameButton.textContent = "Enter the battlefield";
    mainMenuContainer.appendChild(startGameButton);

    document.body.appendChild(mainMenuContainer);

    startGameButton.addEventListener("click", game.startGame);
    startGameButton.addEventListener("click", this.clearDisplay);
  }

  clearDisplay() {
    document.body.innerHTML = "";
    console.log("display cleared");
  }
}

export { DisplayController };
