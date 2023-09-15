import "./style.css";
import { DisplayController } from "./components/displayController";
import { Game } from "./components/Game";

const game = new Game();
const displayController = new DisplayController();

if (!game.gameStarted) {
  displayController.displayMainMenu(game);
}
