import { speed } from "../app.js";

// PAINT

// CONDITION

// DELAY
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

async function swap(array, firstItemIndex, lastItemIndex) {
  const divEl = document.querySelectorAll(".visualizer__contianer__element");

  const temp = array[firstItemIndex];
  array[firstItemIndex] = array[lastItemIndex];
  array[lastItemIndex] = temp;

  // UPDATE DIV HEIGHT
  divEl[firstItemIndex].style.height = `${array[firstItemIndex]}px`;
  divEl[lastItemIndex].style.height = `${array[lastItemIndex]}px`;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

async function heapify(heap, i, max) {
  // indices
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    await wait();

    index = i;
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    if (index === i) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, speed);
      });
    }

    await swap(heap, i, index);

    i = index;
  }
}

async function buildMaxHeap(arr) {
  // mid index
  let i = Math.floor(arr.length / 2 - 1);

  while (i >= 0) {
    await heapify(arr, i, arr.length);
    i -= 1;
  }
}

async function heapSortMain(arr) {
  await buildMaxHeap(arr);

  // last index
  let lastElement = arr.length - 1;

  while (lastElement > 0) {
    await swap(arr, 0, lastElement);
    await heapify(arr, 0, lastElement);
    lastElement -= 1;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, speed);
  });
}

export async function heapSort() {
  console.log("Heap Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  const sorted = await heapSortMain(divHeight);
}
