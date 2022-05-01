import { speed } from "../app.js";
import { terminate } from "../initiate.js";
// PAINT
function checkPaint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// CONDITION
function checkCondition(i, j) {
  if (i > j) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, speed);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, speed);
    });
  }
}

export async function cocktailShaker() {
  console.log("Cocktail Shaker Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  // COCKTAIL SHAKER ALGORITHM
  let length = divHeight.length - 1;
  let is_Sorted = true;
  for (let a = 0; a < divHeight.length; a++) {
    for (let i = a; i < divHeight.length - a - 1; i++) {
      const bigCondition = await checkCondition(divHeight[i], divHeight[i + 1]);
      if (await bigCondition) {
        let temp = divHeight[i];
        divHeight[i] = divHeight[i + 1];
        divHeight[i + 1] = temp;
        is_Sorted = true;
        // UPDATE DIV
        divEl[i].style.height = `${divHeight[i]}px`;
        divEl[i + 1].style.height = `${divHeight[i + 1]}px`;
        // STYLE DIV
        divEl[i].style.backgroundColor = "#8ec7f5";
        divEl[i + 1].style.backgroundColor = "yellow";
      } else if ((await bigCondition) === false) {
        // STYLE DIV
        divEl[i].style.backgroundColor = "#8ec7f5";
        divEl[i + 1].style.backgroundColor = "red";
      }
      // TERMINATE
      if (terminate === true) return false;
    }
    divEl[length - a].style.backgroundColor = "green";

    if (!is_Sorted) break;
    is_Sorted = false;

    for (let j = divHeight.length - a - 1; j > a; j--) {
      const lowCondition = await checkCondition(divHeight[j - 1], divHeight[j]);
      if (await lowCondition) {
        let temp = divHeight[j];
        divHeight[j] = divHeight[j - 1];
        divHeight[j - 1] = temp;
        is_Sorted = true;
        // UPDATE DIV
        divEl[j].style.height = `${divHeight[j]}px`;
        divEl[j - 1].style.height = `${divHeight[j - 1]}px`;
        // STYLE DIV
        divEl[j].style.backgroundColor = "#8ec7f5";
        divEl[j - 1].style.backgroundColor = "yellow";
      } else if ((await lowCondition) === false) {
        // STYLE DIV
        divEl[j].style.backgroundColor = "#8ec7f5";
        divEl[j - 1].style.backgroundColor = "red";
        divEl[length - a].style.backgroundColor = "green";
      }
      // TERMINATE
      if (terminate === true) return false;
    }
    divEl[a].style.backgroundColor = "blue";
  }

  // PAINT
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = "pink";
    }
  }
}
