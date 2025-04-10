import "./style.css";
import {
  george,
  angela,
  liam,
  olivia,
  rachel,
  tom,
  tessa,
} from "../assets/people";
import {
  bucket,
  chair,
  rope,
  chair2,
  extinguisher,
  barrel,
  bell,
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
const moreCluesBox = document.querySelector<HTMLDivElement>(".overlay__btnbox");
const moreClues = document.querySelectorAll<HTMLButtonElement>(
  ".overlay__btnbox--btn"
);
const closeBtn = document.querySelector<HTMLButtonElement>(".overlay__close");
const weaponsMap: Record<string, { initial: string; closer: string }> = {
  bucket,
  chair,
  rope,
  chair2,
  extinguisher,
  barrel,
  bell,
};
const peopleMap: Record<
  string,
  { initial: string; alibi: string; accusation: string }
> = {
  angela,
  george,
  liam,
  olivia,
  rachel,
  tom,
  tessa,
};
if (
  !board ||
  !boardPieces ||
  !background ||
  !clues ||
  !closeBtn ||
  !cluesBox ||
  !icon ||
  !moreCluesBox
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
  const personID = person.id as string;
  moreCluesBox.id = person.id;
  icon.src = `/${person.id}.png`;

  const selectedPerson = peopleMap[personID];
  if (selectedPerson) {
    clues.innerText += selectedPerson.initial;
  }

  moreClues[0].innerText = "Where were you at 3pm?";
  moreClues[1].innerText = "Who do you think it was?";
};
const handleWeaponClick = (event: Event) => {
  if (!clues || !event.currentTarget) {
    throw new Error("Something went wrong! ");
  }
  cluesBox.style.display = "flex";
  const weapon = event.currentTarget as HTMLElement;
  const weaponID = weapon.id as string;
  moreCluesBox.id = weapon.id;
  icon.src = `/${weapon.id}.png`;

  const selectedPerson = weaponsMap[weaponID];
  if (selectedPerson) {
    clues.innerText += selectedPerson.initial;
  }

  moreClues[0].innerText = "Inspect closer";
  moreClues[1].innerText = "Look underneath";
};
const handleMoreClues = (event: Event) => {
  const clue = event.currentTarget as HTMLElement;
  if (!clue.parentElement) {
    throw new Error("whoops! something went wrong :/");
  }
  const boxID = clue.parentElement.id as string;
  const selectedPerson = peopleMap[boxID];
  const selectedWeapon = weaponsMap[boxID];
  if (clue.id === "btn-1") {
    clues.innerText = "";
    selectedPerson
      ? (clues.innerText = selectedPerson.accusation)
      : (clues.innerText = selectedWeapon.closer);
  }
  if (clue.id === "btn-2") {
    clues.innerText = "";
    selectedPerson
      ? (clues.innerText = selectedPerson.accusation)
      : (clues.innerText = selectedWeapon.closer);
  }
};
people.forEach((person) => person.addEventListener("click", handlePersonClick));

weapons.forEach((weapon) =>
  weapon.addEventListener("click", handleWeaponClick)
);

closeBtn.addEventListener("click", () => {
  clues.innerText = "";
  moreCluesBox.id = "";
  cluesBox.style.display = "none";
});
moreClues.forEach((clue) => {
  clue.addEventListener("click", handleMoreClues);
});
