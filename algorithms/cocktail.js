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
}
