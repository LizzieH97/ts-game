type TypewriterOptions = {
  text: string; // Full text to animate (can include \n for multiple lines)
  clues: HTMLElement; // DOM element to display the animation
  speed?: number; // Typing speed per character (ms)
  scrollAt?: number; // When to scroll the text
};

export const startTypewriter = ({
  text,
  clues,
  speed = 50,
  scrollAt = 20,
}: TypewriterOptions) => {
  const clueText = text.split("\n");
  let i = 0;
  let iTextPos = 0;

  const typewriter = () => {
    let sentText = "";
    let iRow = Math.max(0, i - scrollAt);

    while (iRow < i) {
      sentText += clueText[iRow++] + "<br />";
    }

    clues.innerHTML = sentText + clueText[i].substring(0, iTextPos);

    if (iTextPos++ < clueText[i].length) {
      setTimeout(typewriter, speed);
    } else {
      iTextPos = 0;
      i++;
      if (i < clueText.length) {
        setTimeout(typewriter, 10); // Pause between lines
      }
    }
  };

  typewriter();
};
