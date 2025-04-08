import "./style.css";
import { george } from "../assets/george";
import { angela } from "../assets/angela";
import { liam } from "../assets/liam";
import { olivia } from "../assets/olivia";
import { rachel } from "../assets/rachel";
import { tom } from "../assets/tom";

const background = document.querySelector<HTMLElement>(".background");
const board = document.querySelector<HTMLUListElement>(".board");
const boardPieces = document.querySelectorAll<HTMLLIElement>(".board__piece");
const people = document.querySelectorAll<HTMLButtonElement>(
  ".board__piece--person"
);
const testimoniesBox = document.querySelector<HTMLDivElement>(".testimonies");
const testimonies =
  document.querySelector<HTMLDivElement>(".testimonies__text");
const closeBtn = document.querySelector<HTMLButtonElement>(
  ".testimonies__close"
);

const weapons = document.querySelector<HTMLDivElement>(".weapons");

if (
  !board ||
  !boardPieces ||
  !background ||
  !testimonies ||
  !closeBtn ||
  !testimoniesBox
) {
  throw new Error("Something went wrong! ");
}

board.style.background = "url('/background.jpg')";
const handlePersonClick = (event: Event) => {
  if (!testimonies || !event.currentTarget) {
    throw new Error("Something went wrong! ");
  }
  testimoniesBox.style.display = "flex";
  const person = event.currentTarget as HTMLElement;
  console.log(person.id);

  if (person.id == "angela") {
    testimonies.innerText += angela.initial;
  }
  if (person.id == "george") {
    testimonies.innerText += george.initial;
  }
  if (person.id == "liam") {
    testimonies.innerText += liam.initial;
  }
  if (person.id == "olivia") {
    testimonies.innerText += olivia.initial;
  }
  if (person.id == "rachel") {
    testimonies.innerText += rachel.initial;
  }
  if (person.id == "tom") {
    testimonies.innerText += tom.initial;
  }
};
people.forEach((person) => person.addEventListener("click", handlePersonClick));

closeBtn.addEventListener("click", () => {
  testimonies.innerText = "";
  testimoniesBox.style.display = "none";
});
