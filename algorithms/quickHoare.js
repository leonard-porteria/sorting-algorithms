import { speed } from "../app.js";

// PAINT

// CONDITION

// SWAP
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

//PARTITION
function partition(arr, lo, hi) {
  const pivot = arr[Math.floor((lo + hi) / 2)];
  let i = lo - 1;
  let j = hi + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    swap(arr, i, j);
  }
}

// MAIN FUNCTION
function quickSort(arr, lo, hi) {
  if (lo >= 0 && hi >= 0 && lo < hi) {
    const p = partition(arr, lo, hi);
    quickSort(arr, lo, p);
    quickSort(arr, p + 1, hi);
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

  console.log(divHeight);
  quickSort(divHeight, 0, divHeight.length - 1);
  console.log(divHeight);
}
