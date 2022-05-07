import { speed } from "../app.js";
import { terminate } from "../initiate.js";
import { closeTerminate } from "../index.js";
import { baseColors, uiColors, algoColors } from "../config.js";
// PAINT
function checkPaint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// CHECK CONDITION
async function checkCondition(i, j) {
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

export async function selectionSort() {
  console.log("Selection Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  for (let i = 0; i < divHeight.length; i++) {
    let smallest = divHeight[i];
    let index = i;
    for (let j = i; j < divHeight.length; j++) {
      const condition = await checkCondition(smallest, divHeight[j]);
      divEl[j].style.backgroundColor = algoColors.endPoints;
      if (await condition) {
        divEl[index].style.backgroundColor = algoColors.endPoints;
        divEl[j].style.backgroundColor = algoColors.err;
        smallest = divHeight[j];
        index = j;
      }
      // TERMINATE
      if (terminate === true) return false;
    }

    // PAINT PARTITION
    for (let k = i + 1; k < divHeight.length; k++) {
      divEl[k].style.backgroundColor = algoColors.area;
    }

    // SWAP Kth VALUE WITH SMALLEST VALUE
    let temp = divHeight[i];
    divHeight[i] = smallest;
    divHeight[index] = temp;
    // UPDATE DIV HEIGHT
    divEl[i].style.height = `${divHeight[i]}px`;
    divEl[index].style.height = `${divHeight[index]}px`;
    // RESET VALUES
  }

  // PAINT
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = algoColors.finish;
    }
  }
  closeTerminate();
}
