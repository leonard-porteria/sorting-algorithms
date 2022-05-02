import { sortChoice } from "./initiate.js";
import { uiColors } from "./config.js";

// ALGORITHM DROPDOWN
const dropdown = document.querySelector(".generate__algos");
const caret = document.querySelector(".caret");
const dropdownContainer = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
  if (caret.classList.contains("down")) {
    // OPEN DROPDOWN
    caret.classList.remove("down");
    caret.classList.add("up");
    dropdownContainer.style.opacity = "1";
    dropdownContainer.style.zIndex = "1";
    dropdownContainer.style.pointerEvents = "all";
    dropdownContainer.style.transform = "translateY(5rem)";
  } else {
    // CLOSE DROPDOWN
    caret.classList.remove("up");
    caret.classList.add("down");
    dropdownContainer.style.opacity = "0";
    dropdownContainer.style.zIndex = "-1";
    dropdownContainer.style.pointerEvents = "none";
    dropdownContainer.style.transform = "translateY(2rem)";
  }
});

// TERMINATE BUTTON
const start = document.querySelector(".generate__start");
const startText = document.querySelector(".generate__start h1");
// enable terminate button
start.addEventListener("click", () => {
  if (sortChoice === 0) return false;
  if (start.classList.contains("start")) {
    openTerminate();
  } else {
    closeTerminate();
  }
});

function openTerminate() {
  start.classList.add("terminate");
  start.classList.remove("start");
  startText.textContent = "Terminate!";
  start.style.backgroundColor = uiColors.red;
}

export function closeTerminate() {
  start.classList.add("start");
  start.classList.remove("terminate");
  startText.textContent = "Start Sorting!";
  start.style.backgroundColor = uiColors.green;
}
