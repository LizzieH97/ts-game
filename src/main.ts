import "./style.css";

const board = document.querySelector<HTMLUListElement>(".board");
const boardPieces = document.querySelectorAll<HTMLLIElement>(".board__piece");
if (!board || !boardPieces) {
  throw new Error("Something went wrong! ");
}
board.style.background = "url('/background.jpg')";

console.log(boardPieces);
