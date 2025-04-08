import "./style.css";
import { george, angela, liam, olivia, rachel, tom } from "../assets/people";
import {
  bucket,
  chair,
  rope,
  chair2,
  extinguisher,
  barrel,
} from "../assets/weapons";

const background = document.querySelector<HTMLElement>(".background");
const board = document.querySelector<HTMLUListElement>(".board");
const boardPieces = document.querySelectorAll<HTMLLIElement>(".board__piece");
const people = document.querySelectorAll<HTMLButtonElement>(
  ".board__piece--person"
);
const weapons = document.querySelectorAll<HTMLDivElement>(
  ".board__piece--tool"
);
const cluesBox = document.querySelector<HTMLDivElement>(".overlay");
const clues = document.querySelector<HTMLDivElement>(".overlay__text");
const icon = document.querySelector<HTMLImageElement>(".overlay__img");
const closeBtn = document.querySelector<HTMLButtonElement>(".overlay__close");

if (
  !board ||
  !boardPieces ||
  !background ||
  !clues ||
  !closeBtn ||
  !cluesBox ||
  !icon
) {
  throw new Error("Something went wrong! ");
}

board.style.background = "url('/background.jpg')";
const handlePersonClick = (event: Event) => {
  if (!clues || !event.currentTarget) {
    throw new Error("Something went wrong! ");
  }
  cluesBox.style.display = "flex";
  const person = event.currentTarget as HTMLElement;
  console.log(person.id);
  console.log(icon.src);
  if (person.id == "angela") {
    clues.innerText += angela.initial;
    icon.src = "/angela.png";
  }
  if (person.id == "george") {
    clues.innerText += george.initial;
    icon.src = "/george.png";
  }
  if (person.id == "liam") {
    clues.innerText += liam.initial;
    icon.src = "/liam.png";
  }
  if (person.id == "olivia") {
    clues.innerText += olivia.initial;
    icon.src = "/olivia.png";
  }
  if (person.id == "rachel") {
    clues.innerText += rachel.initial;
    icon.src = "/rachel.png";
  }
  if (person.id == "tom") {
    clues.innerText += tom.initial;
    icon.src = "/tom.png";
  }
};
const handleWeaponClick = (event: Event) => {
  if (!clues || !event.currentTarget) {
    throw new Error("Something went wrong! ");
  }
  cluesBox.style.display = "flex";
  const weapon = event.currentTarget as HTMLElement;
  if (weapon.id == "bucket") {
    clues.innerText += bucket.initial;
    icon.src = "/bucket.png";
  }
  if (weapon.id == "chair") {
    clues.innerText += chair.initial;
    icon.src = "/chair.png";
  }
  if (weapon.id == "rope") {
    clues.innerText += rope.initial;
    icon.src = "/rope.png";
  }
  if (weapon.id == "chair2") {
    clues.innerText += chair2.initial;
    icon.src = "/chair.png";
  }
  if (weapon.id == "extinguisher") {
    clues.innerText += extinguisher.initial;
    icon.src = "/extinguisher.png";
  }
  if (weapon.id == "barrel") {
    clues.innerText += barrel.initial;
    icon.src = "/barrel.png";
  }
};
people.forEach((person) => person.addEventListener("click", handlePersonClick));

weapons.forEach((weapon) =>
  weapon.addEventListener("click", handleWeaponClick)
);

closeBtn.addEventListener("click", () => {
  clues.innerText = "";
  cluesBox.style.display = "none";
});
