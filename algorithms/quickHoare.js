import { speed } from "../app.js";
import { terminate } from "../initiate.js";
import { closeTerminate } from "../index.js";
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

  divEl[Math.floor((lo + hi) / 2)].style.backgroundColor = "red";

  while (true) {
    do {
      i++;
      divEl[i].style.backgroundColor = "blue";
      await wait();
    } while (arr[i] < pivot);

    do {
      j--;
      divEl[j].style.backgroundColor = "green";
      await wait();
    } while (arr[j] > pivot);

    if (i >= j) {
      for (let i = 0; i < arr.length; i++) {
        divEl[i].style.backgroundColor = "#8ec7f5";
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

  if (sorted === true) {
    for (let i = 0; i < divHeight.length; i++) {
      const paint = await checkPaint();
      if (await paint) {
        divEl[i].style.backgroundColor = "pink";
      }
    }
  }
  closeTerminate();
}
