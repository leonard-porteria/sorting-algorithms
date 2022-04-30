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
