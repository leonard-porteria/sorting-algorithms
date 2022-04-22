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
        divEl[i].style.height = `${divHeight[i]}px`;

        divHeight[i + 1] = temp;
        divEl[i + 1].style.height = `${divHeight[i + 1]}px`;

        is_Sorted = true;
      }
    }

    if (!is_Sorted) break;
    is_Sorted = false;

    for (let j = divHeight.length - 1; j > 0; j--) {
      if (divHeight[j - 1] > divHeight[j]) {
        let temp = divHeight[j];

        divHeight[j] = divHeight[j - 1];
        divEl[j].style.height = `${divHeight[j]}px`;

        divHeight[j - 1] = temp;
        divEl[j - 1].style.height = `${divHeight[j - 1]}px`;

        is_Sorted = true;
      }
    }
  }

  console.log(divHeight);
}
