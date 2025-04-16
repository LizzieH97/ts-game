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
import { startTypewriter } from "../assets/typewriter";

//defining
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
const cluesCloseBtn =
  document.querySelector<HTMLButtonElement>(".overlay__close");
const notebook = document.querySelector<HTMLDivElement>(".notebookOverlay");
const notebookOpenBtn =
  document.querySelector<HTMLButtonElement>(".header__notebook");
const captainOpenBtn =
  document.querySelector<HTMLButtonElement>(".header__captain");
const notebookWriting = document.querySelector<HTMLUListElement>(
  ".notebookOverlay__bulletPts"
);
const addNewNoteForm = document.querySelector<HTMLFormElement>(
  ".notebookOverlay__addNote"
);
const noteInput = document.querySelector<HTMLInputElement>(
  ".notebookOverlay__addNote--input"
);
const notebookCloseBtn = document.querySelector<HTMLButtonElement>(
  ".notebookOverlay__close"
);
const captainScene = document.querySelector<HTMLDivElement>(".captainOverlay");

const weaponsMap: Record<
  string,
  { initial: string; closer: string; under: string; summary: string }
> = {
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
  { initial: string; alibi: string; accusation: string; summary: string }
> = {
  angela,
  george,
  liam,
  olivia,
  rachel,
  tom,
  tessa,
};
//dealing with errors
if (
  !board ||
  !boardPieces ||
  !background ||
  !clues ||
  !cluesCloseBtn ||
  !cluesBox ||
  !icon ||
  !moreCluesBox ||
  !notebook ||
  !notebookOpenBtn ||
  !notebookWriting ||
  !addNewNoteForm ||
  !noteInput ||
  !notebookCloseBtn ||
  !captainOpenBtn ||
  !captainScene
) {
  throw new Error("Something went wrong! ");
}

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
    clues.innerText = "";
    startTypewriter({ text: selectedPerson.initial, clues: clues });

    moreClues[0].innerText = "Where were you at 3pm?";
    moreClues[1].innerText = "Who do you think it was?";
  }
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
    startTypewriter({ text: selectedPerson.initial, clues: clues });
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
      ? startTypewriter({ text: selectedPerson.alibi, clues: clues })
      : startTypewriter({ text: selectedWeapon.closer, clues: clues });
  }
  if (clue.id === "btn-2") {
    clues.innerText = "";
    selectedPerson
      ? startTypewriter({ text: selectedPerson.accusation, clues: clues })
      : startTypewriter({ text: selectedWeapon.under, clues: clues });
  }
  if (clue.id === "post-to-notepad") {
    const bulletPoint = selectedPerson
      ? selectedPerson.summary
      : selectedWeapon.summary;
    const bulletPointAndBtn = document.createElement("li");
    bulletPointAndBtn.innerHTML = `${bulletPoint} <button class="deleteText">Delete</button>`;
    notebookWriting.appendChild(bulletPointAndBtn);
    noteInput.value = "";
  }
};

const handleNotebookOpenBtnClick = (event: Event) => {
  event.preventDefault();
  notebook.style.display = "flex";
};

const handleAddNoteSubmit = (event: Event) => {
  event.preventDefault();
  const bulletPoint = noteInput.value;
  if (!bulletPoint) return;
  const bulletPointAndBtn = document.createElement("li");
  bulletPointAndBtn.innerHTML = `${bulletPoint} <button class="deleteText">Delete</button>`;
  notebookWriting.appendChild(bulletPointAndBtn);
  noteInput.value = "";
};
const handleNotebookClose = (event: Event) => {
  event.preventDefault();
  notebook.style.display = "none";
};
const handleCaptainSceneOpen = (event: Event) => {
  event.preventDefault();
  captainScene.style.display = "flex";
};

// event listeners

people.forEach((person) => person.addEventListener("click", handlePersonClick));

weapons.forEach((weapon) =>
  weapon.addEventListener("click", handleWeaponClick)
);

cluesCloseBtn.addEventListener("click", () => {
  clues.innerText = "";
  moreCluesBox.id = "";
  cluesBox.style.display = "none";
});
moreClues.forEach((clue) => {
  clue.addEventListener("click", handleMoreClues);
});
notebookOpenBtn.addEventListener("click", handleNotebookOpenBtnClick);
addNewNoteForm.addEventListener("submit", handleAddNoteSubmit);
notebookCloseBtn?.addEventListener("click", handleNotebookClose);
notebookWriting.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLElement;
  //trying to remove one bullet point of text?? closest??
  if (target.classList.contains("deleteText")) {
    const listItem = target.closest("li");
    if (listItem) {
      listItem.remove();
    }
  }
});
captainOpenBtn?.addEventListener("click", handleCaptainSceneOpen);
