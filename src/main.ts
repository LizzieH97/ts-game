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
const openingScreen = document.querySelector<HTMLDivElement>(".openingScreen");
const closeOpeningScreen = document.querySelector<HTMLButtonElement>(
  ".openingScreen__btn"
);
const cluesBox = document.querySelector<HTMLDivElement>(".cluesOverlay");
const clues = document.querySelector<HTMLDivElement>(".cluesOverlay__text");
const icon = document.querySelector<HTMLImageElement>(".cluesOverlay__img");
const moreCluesBox = document.querySelector<HTMLDivElement>(
  ".cluesOverlay__btnbox"
);
const moreClues = document.querySelectorAll<HTMLButtonElement>(
  ".cluesOverlay__btnbox--btn"
);
const cluesCloseBtn = document.querySelector<HTMLButtonElement>(
  ".cluesOverlay__close"
);
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
const captainOverlay =
  document.querySelector<HTMLDivElement>(".captainOverlay");
const captainCloseBtn = document.querySelector<HTMLButtonElement>(
  ".captainOverlay__close"
);
const captainInitialScr = document.querySelector<HTMLDivElement>(
  ".captainOverlay__initial"
);
const captainOptionsBtn = document.querySelectorAll<HTMLButtonElement>(
  ".captainOverlay__initial--btn"
);
const captainInfoBackBtn = document.querySelector<HTMLButtonElement>(
  ".captainOverlay__info--close"
);
const captainFinalBackBtn = document.querySelector<HTMLButtonElement>(
  ".captainOverlay__final--close"
);
const captainInfoScr = document.querySelector<HTMLDivElement>(
  ".captainOverlay__info"
);
const captainFinalScr = document.querySelector<HTMLDivElement>(
  ".captainOverlay__final"
);
const selectSuspect = document.querySelector<HTMLSelectElement>(
  ".accusationForm__suspects"
);
const selectWeapon = document.querySelector<HTMLSelectElement>(
  ".accusationForm__weapons"
);
const accuseSuspect =
  document.querySelector<HTMLFormElement>(".accusationForm");
const personResult = document.querySelector<HTMLParagraphElement>(
  ".captainOverlay__final--person-result"
);
const weaponResult = document.querySelector<HTMLParagraphElement>(
  ".captainOverlay__final--weapon-result"
);
const cautionPrompt = document.querySelector<HTMLParagraphElement>(
  ".captainOverlay__final--text"
);
const playAgain = document.querySelector<HTMLButtonElement>(
  ".captainOverlay__final--end-game"
);
const weaponsMap: Record<
  string,
  {
    initial: string;
    closer: string;
    under: string;
    summary: string;
    result: string;
  }
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
  {
    initial: string;
    alibi: string;
    accusation: string;
    summary: string;
    result: string;
  }
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
  !closeOpeningScreen ||
  !openingScreen ||
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
  !captainOverlay ||
  !captainCloseBtn ||
  !captainInitialScr ||
  !captainInfoScr ||
  !captainInfoBackBtn ||
  !captainFinalBackBtn ||
  !captainFinalScr ||
  !selectSuspect ||
  !selectWeapon ||
  !accuseSuspect ||
  !personResult ||
  !weaponResult ||
  !cautionPrompt ||
  !playAgain
) {
  throw new Error("Something went wrong! ");
}
// handle functions

const handleCloseOpeningScreen = (event: Event) => {
  event.preventDefault();
  openingScreen.style.display = "none";
};
const handlePersonClick = (event: Event) => {
  if (!clues || !event.currentTarget) {
    throw new Error("Something went wrong! ");
  }
  cluesBox.style.display = "flex";
  const person = event.currentTarget as HTMLElement;
  const personID = person.id as string;
  moreCluesBox.id = person.id;
  icon.src = `/ts-game/public/${person.id}.png`;
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
  if (weapon.id === "chair2") {
    icon.src = "/ts-game/public/chair.png";
  } else {
    icon.src = `/ts-game/public/${weapon.id}.png`;
  }

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
const handleCluesClose = (event: Event) => {
  event.preventDefault();
  clues.innerText = "";
  moreCluesBox.id = "";
  cluesBox.style.display = "none";
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
  bulletPointAndBtn.innerHTML = `${bulletPoint} <button class="deleteText" >Delete</button>`;
  notebookWriting.appendChild(bulletPointAndBtn);
  noteInput.value = "";
};
const handleNotebookClose = (event: Event) => {
  event.preventDefault();
  notebook.style.display = "none";
};
const handleCaptainOpen = (event: Event) => {
  event.preventDefault();
  captainOverlay.style.display = "grid";
  captainInitialScr.style.display = "grid";
};
const handleCaptainClose = (event: Event) => {
  event.preventDefault();
  captainOverlay.style.display = "none";
  captainInfoScr.style.display = "none";
  captainFinalScr.style.display = "none";
  accuseSuspect.style.display = "none";
};
const handleCaptainOptions = (event: Event) => {
  event.preventDefault();
  if (event.target) {
    cautionPrompt.style.display = "flex";
    const btn = event.currentTarget as HTMLElement;
    captainInitialScr.style.display = "none";
    btn.id === "moreInfo"
      ? (captainInfoScr.style.display = "flex")
      : ((captainFinalScr.style.display = "flex"),
        (accuseSuspect.style.display = "flex"));
  }
};

const handleCaptainBack = (event: Event) => {
  event.preventDefault();
  captainInfoScr.style.display = "none";
  captainFinalScr.style.display = "none";
  captainInitialScr.style.display = "grid";
  personResult.innerText = "";
  weaponResult.innerText = "";
};

const handleAccusation = (event: Event) => {
  event.preventDefault();
  accuseSuspect.style.display = "none";
  cautionPrompt.style.display = "none";
  weaponResult.style.display = "flex";
  personResult.style.display = "flex";
  const accusedSuspect = selectSuspect.value;
  const accusedWeapon = selectWeapon.value;
  const internalAccusedSuspect = peopleMap[accusedSuspect];
  const internalAccusedWeapon = weaponsMap[accusedWeapon];
  if (accusedSuspect === "tom" && accusedWeapon === "extinguisher") {
    personResult.innerHTML = internalAccusedSuspect.result;
    weaponResult.innerText = internalAccusedWeapon.result;
    captainFinalBackBtn.style.display = "none";
    playAgain.style.display = "flex";
  } else {
    personResult.innerText = internalAccusedSuspect.result;
    weaponResult.innerText = internalAccusedWeapon.result;
  }
};

// event listeners

people.forEach((person) => person.addEventListener("click", handlePersonClick));

weapons.forEach((weapon) =>
  weapon.addEventListener("click", handleWeaponClick)
);

closeOpeningScreen.addEventListener("click", handleCloseOpeningScreen);

cluesCloseBtn.addEventListener("click", handleCluesClose);
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
captainOpenBtn?.addEventListener("click", handleCaptainOpen);
captainCloseBtn.addEventListener("click", handleCaptainClose);
captainOptionsBtn.forEach((btn) => {
  btn.addEventListener("click", handleCaptainOptions);
});
captainInfoBackBtn.addEventListener("click", handleCaptainBack);
captainFinalBackBtn.addEventListener("click", handleCaptainBack);
accuseSuspect.addEventListener("submit", handleAccusation);
playAgain?.addEventListener("click", () => {
  location.reload();
});
