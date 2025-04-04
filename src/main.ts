import "./style.css";

const background = document.querySelector<HTMLElement>(".background");
const board = document.querySelector<HTMLUListElement>(".board");
const boardPieces = document.querySelectorAll<HTMLLIElement>(".board__piece");
const people = document.querySelectorAll<HTMLButtonElement>(
  ".board__piece--person"
);
const testimonies = document.querySelector<HTMLDivElement>(
  ".overlay__testimonies"
);
const closeBtn = document.querySelector<HTMLButtonElement>(
  ".overlay__testimonies--close"
);

const weapons = document.querySelector<HTMLDivElement>(".weapons");
if (!board || !boardPieces || !background || !testimonies || !closeBtn) {
  throw new Error("Something went wrong! ");
}
const liamSpeech: string =
  "*Liam appears to be stumling around the deck, drunk.* I can't even believe what's happening right now. We were about to get married. We were about to start our lives together. I talking to Angela in the bar, I thought she would be right back. At least I have a good friend in Angela to help me through this, I couldn't go through it without her. We've been through thick and thin together.";
const oliviaSpeech: string =
  "How can this happen?! My sister! She was supposed to be getting married next week! I was in the toilet when it happened, if I were to look at anyone I'd look at Rachel. They've had a strained relationship for years, and I was surprised that she was her made of honour. Tessa slept with her boyfriend last year!";
const rachelSpeech: string =
  "I haven't stopped crying since I found out. I'm in bits. I can't believe she's been killed right before her wedding. My money is on Olivia - Tessa was the golden child and Olivia was always in her shadow. She wasn't even her made of honour.";
const angelaSpeech: string =
  "Oh my gosh, this whole trip is terrible. I can't believe she's gone. Poor Liam - he's just lost his fiancee jsut as she was about to be his wife. My heart breaks for him. We've been through so much together, but I never thought we'd have to go through this.";
const tomSpeech: string =
  "I don't even know what to think. I would've done anything for her. I DID do anything for her, anything she asked me to. Now she's gone. I would look at her husband-to-be, he always gave me a bad feeling and I always thought that she deserved better than him. A man that would give her the world.";
const georgeSpeech: string =
  "*You struggle to even make out what George is saying through his slurs. He slumps against the railings.* I'll tell you what, if I'd got the promotion to Captain, this wouldn't be happening on my watch!";
board.style.background = "url('/background.jpg')";
const handlePersonClick = (event: Event) => {
  testimonies.style.display = "flex";
  console.log(event);
};
people.forEach((person) => person.addEventListener("click", handlePersonClick));

closeBtn.addEventListener("click", () => {
  testimonies.style.display = "none";
});
