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

// DELAY
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// SWAP
function swap(array, i, j) {
  // TERMINATE
  if (terminate === true) return false;

  const divEl = document.querySelectorAll(".visualizer__contianer__element");

  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  divEl[i].style.height = `${array[i]}px`;
  divEl[j].style.height = `${array[j]}px`;
}

//PARTITION
async function partition(arr, lo, hi) {
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const pivot = arr[Math.floor((lo + hi) / 2)];
  let i = lo - 1;
  let j = hi + 1;

  while (true) {
    do {
      // TERMINATE
      if (terminate === true) return false;
      i++;
      divEl[i].style.backgroundColor = algoColors.leftPart;
      await wait();
    } while (arr[i] < pivot);

    do {
      // TERMINATE
      if (terminate === true) return false;
      j--;
      divEl[j].style.backgroundColor = algoColors.valid;
      await wait();
    } while (arr[j] > pivot);

    if (i >= j) {
      for (let i = 0; i < arr.length; i++) {
        divEl[i].style.backgroundColor = algoColors.area;
      }
      return j;
    }

    await wait();
    swap(arr, i, j);
  }
}

// MAIN FUNCTION
async function quickSort(arr, lo, hi) {
  // TERMINATE
  if (terminate === true) return false;

  if (lo >= 0 && hi >= 0 && lo < hi) {
    const p = await partition(arr, lo, hi);
    await quickSort(arr, lo, p);
    await quickSort(arr, p + 1, hi);
  }
}

export async function quickHoareSort() {
  console.log("Quick Sort [Hoare] Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  const sorted = await quickSort(divHeight, 0, divHeight.length - 1);

  // TERMINATE
  if (terminate === true) return false;

  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = algoColors.finish;
    }
  }

  closeTerminate();
  enableSlider();
}
