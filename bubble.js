import { speed } from "./app.js";
// CONDITION
function checkCondition(i, j) {
  if (i >= j) {
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
// PAINT
function checkPaint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

export async function bubbleSort() {
  console.log("Bubble Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }
  // SORT
  for (let i = 0; i < divHeight.length; i++) {
    for (let j = 0; j < divHeight.length - i - 1; j++) {
      const condition = await checkCondition(divHeight[j], divHeight[j + 1]);
      if (await condition) {
        let temp = divHeight[j];
        divHeight[j] = divHeight[j + 1];
        divHeight[j + 1] = temp;
        // UPDATE DIV
        divEl[j].style.height = `${divHeight[j]}px`;
        divEl[j + 1].style.height = `${divHeight[j + 1]}px`;
        // STYLE
        divEl[j + 1].style.backgroundColor = "green";
        divEl[j].style.backgroundColor = "#8ec7f5";
      } else if ((await condition) === false) {
        if (divHeight[j + 1] <= divHeight[j + 2]) {
          divEl[j + 1].style.backgroundColor = "green";
          divEl[j].style.backgroundColor = "#8ec7f5";
        } else {
          divEl[j + 1].style.backgroundColor = "red";
          divEl[j].style.backgroundColor = "#8ec7f5";
        }
      }
    }
  }
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = "pink";
    }
  }
}
