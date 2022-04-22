import { speed } from "../app.js";

export async function cocktailShaker() {
  console.log("Cocktail Shaker Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }
  console.log(divHeight);

  let is_Sorted = true;

  while (is_Sorted) {
    for (let i = 0; i < divHeight.length - 1; i++) {
      if (divHeight[i] > divHeight[i + 1]) {
        let temp = divHeight[i];
        divHeight[i] = divHeight[i + 1];
        divHeight[i + 1] = temp;
        is_Sorted = true;
      }
    }

    if (!is_Sorted) break;
    is_Sorted = false;

    for (let j = divHeight.length - 1; j > 0; j--) {
      if (divHeight[j - 1] > divHeight[j]) {
        let temp = divHeight[j];
        divHeight[j] = divHeight[j - 1];
        divHeight[j - 1] = temp;
        is_Sorted = true;
      }
    }
  }

  console.log(divHeight);
}
