class DisplayController {
  constructor() {
    this.body = document.body;
  }

  displayMainMenu() {
    const mainMenuContainer = document.createElement("div");
    mainMenuContainer.className = "mainMenu__container";

    const heading = document.createElement("h1");
    heading.textContent = "Battleship";
    heading.className = "mainMenu__heading";
    mainMenuContainer.appendChild(heading);

    this.body.appendChild(mainMenuContainer);
  }
}

export { DisplayController };
