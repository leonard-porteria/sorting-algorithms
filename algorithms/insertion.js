import { speed } from "../app.js";
import { terminate } from "../initiate.js";
import { closeTerminate, enableSlider } from "../index.js";
import { algoColors } from "../config.js";
// PAINT
function checkPaint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// CONDITION
function checkCondition(j, arr, temp) {
  if (j >= 0 && arr > temp) {
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

export async function insertionSort() {
  console.log("Insertion Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  for (let i = 1; i < divHeight.length; i++) {
    let temp = divHeight[i];
    let j = i - 1;

    for (;;) {
      // WAIT FOR CONDITION
      const condition = await checkCondition(j, divHeight[j], temp);
      if (!condition === true) break;
      // CHANGE ARRAY VALUE
      divHeight[j + 1] = divHeight[j];
      if (j > 0) {
        // CHANGE HEIGHT OF DIV
        divEl[j + 1].style.height = `${divHeight[j]}px`;
        divEl[j - 1].style.height = `${divHeight[j - 1]}px`;
        // PAIN PARTITION
        for (let k = 0; k < i; k++) {
          divEl[k].style.backgroundColor = "#8ec7f5";
        }
        // STYLE DIV
        divEl[i].style.backgroundColor = algoColors.pivot;
        divEl[j].style.backgroundColor = algoColors.valid;
      }
      j--;
      // TERMINATE
      if (terminate === true) return false;
    }
    divHeight[j + 1] = temp;
    if (j >= 0) {
      divEl[j + 1].style.height = `${divHeight[j + 1]}px`;
      divEl[i].style.backgroundColor = algoColors.pivot;
    }
  }

  // REMOVE PAINT
  for (let i = 0; i < divHeight.length; i++) {
    divEl[i].style.backgroundColor = "#8ec7f5";
  }

  // PAINT SORTED
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = algoColors.finish;
    }
  }
  closeTerminate();
  enableSlider();
}
