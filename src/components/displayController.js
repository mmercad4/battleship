class DisplayController {
  constructor(game) {
    this.game = game;
  }

  displayMainMenu(game, player) {
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

    this.addEventListenersMainMenu(startGameButton, game, player);
  }

  displayGame() {
    this.clearDisplay();

    // Create nav bar
    const nav = document.createElement("div");
    nav.className = "game__nav";
    const navHeading = document.createElement("h1");
    navHeading.className = "game__nav--heading";
    navHeading.textContent = "BATTLESHIP";
    nav.appendChild(navHeading);
    document.body.appendChild(nav);

    // Create game container
    const gameContainer = document.createElement("div");
    gameContainer.className = "game__container";

    // Create Instructions
    const instructionContainer = document.createElement("div");
    instructionContainer.className = "game__instruction--container";
    gameContainer.appendChild(instructionContainer);

    const instructions = document.createElement("h1");
    instructions.className = "game__instructions";
    instructions.textContent = "Place your pieces on the board";
    instructionContainer.appendChild(instructions);

    const restartButton = document.createElement("button");
    restartButton.className = "game__restartButton";
    restartButton.textContent = "Restart";
    instructionContainer.appendChild(restartButton);

    // Create Names
    const nameContainer = document.createElement("div");
    nameContainer.className = "game__name--container";

    const player1Name = document.createElement("h3");
    player1Name.textContent = this.player1.name;
    player1Name.className = "game__name";
    nameContainer.appendChild(player1Name);
    gameContainer.appendChild(nameContainer);

    const cpuName = document.createElement("h3");
    cpuName.textContent = this.cpu.name;
    cpuName.className = "game__name";
    nameContainer.appendChild(cpuName);

    //create Boards

    document.body.appendChild(gameContainer);
  }

  addEventListenersMainMenu(button, game, player) {
    button.addEventListener("click", game.startGame.bind(this));
    button.addEventListener("click", this.displayGame.bind(this));
    // button.addEventListener("click", player.createPlayer);
  }

  clearDisplay() {
    document.body.innerHTML = "";
    console.log("display cleared");
  }
}

export { DisplayController };
