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
function checkCondition(j, i) {
  if (j < i) {
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
// PARTITION
async function partition(array, start, end) {
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  let pivot = array[end];
  let i = start - 1;

  // PAINT PARTITION
  for (let k = start + 1; k < end; k++) {
    divEl[k].style.backgroundColor = algoColors.area;
  }

  for (let j = start; j <= end; j++) {
    const condition = await checkCondition(array[j], pivot);
    divEl[end].style.backgroundColor = algoColors.endPoints;
    if (await condition) {
      i++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      // UPDATE DIV
      divEl[i].style.height = `${array[i]}px`;
      divEl[j].style.height = `${array[j]}px`;
      //STYLE DIV
      divEl[j].style.backgroundColor = algoColors.valid;
      divEl[j + 1].style.backgroundColor = algoColors.pivot;
      divEl[i].style.backgroundColor = algoColors.leftPart;
    } else if ((await condition) === false) {
      divEl[j].style.backgroundColor = algoColors.valid;
      j === end
        ? (divEl[j].style.backgroundColor = algoColors.pivot)
        : (divEl[j + 1].style.backgroundColor = algoColors.pivot);
    }
    // TERMINATE
    if (terminate === true) return false;
  }
  i++;
  let temp = array[i];
  array[i] = array[end];
  array[end] = temp;

  // UPDATE DIV
  divEl[i].style.height = `${array[i]}px`;
  divEl[end].style.height = `${array[end]}px`;
  // STYLE DIV
  divEl[i].style.backgroundColor = algoColors.valid;
  divEl[start].style.backgroundColor = algoColors.valid;
  divEl[end].style.backgroundColor = algoColors.valid;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, speed);
  });
}

// MAIN QUICK SORT
async function quickSortMain(array, start, end) {
  if (end <= start) return; //base case

  let pivot = await partition(array, start, end);
  // lomuto partition scheme [end partition]
  await quickSortMain(array, start, (await pivot) - 1);
  await quickSortMain(array, (await pivot) + 1, end);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// EXPORT FUNCTION
export async function quickSortLomuto() {
  console.log("Quick Sort [Lomuto] Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  const sorted = await quickSortMain(divHeight, 0, divHeight.length - 1);

  // PAINT
  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = algoColors.finish;
    }
  }
  closeTerminate();
  enableSlider();
}
