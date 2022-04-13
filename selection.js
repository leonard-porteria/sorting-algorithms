import { speed } from "./app.js";
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

export async function selectionSort() {
  console.log("Selection Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  let smallest = 0;
  let index = 0;

  for (let i = 0; i < divHeight.length; i++) {
    smallest = divHeight[i];
    for (let j = i; j < divHeight.length; j++) {
      const condition = await checkCondition(smallest, divHeight[j]);
      divEl[j].style.backgroundColor = "green";
      // SAVE SMALLEST VALUE
      if (await condition) {
        divEl[index].style.backgroundColor = "green";
        smallest = divHeight[j];
        index = j;
        divEl[j].style.backgroundColor = "red";
      } else if (condition === false) {
      }
    }

    // PAINT PARTITION
    for (let k = i + 1; k < divHeight.length; k++) {
      divEl[k].style.backgroundColor = "#8ec7f5";
    }

    // SWAP Kth VALUE WITH SMALLEST VALUE
    let temp = divHeight[i];
    divHeight[i] = smallest;
    divHeight[index] = temp;
    // UPDATE DIV HEIGHT
    divEl[i].style.height = `${divHeight[i]}px`;
    divEl[index].style.height = `${divHeight[index]}px`;

    // RESET VALUES
    smallest = 0;
    index = 0;
  }

  // PAINT SORTED
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = "pink";
    }
  }
}
