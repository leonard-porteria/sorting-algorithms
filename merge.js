import { speed } from "./app.js";

// CONDITION
function chechCondition(l, r) {
  if (l < r) {
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

// FIND INDEX
function findIndex(array) {
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  for (let i = 0; i < divEl.length; i++) {
    const visHeight = divEl[i].offsetHeight;
    const startHeight = array[0];
    if (visHeight === startHeight) {
      return i;
    }
  }
  return 0;
}

async function merge(leftArray, rightArray, array) {
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const startIndex = findIndex(array);

  let leftSize = Math.floor(array.length / 2);
  let rightSize = array.length - leftSize;
  let i = 0;
  let l = 0;
  let r = 0;
  let a = startIndex;

  //check the conditions for merging
  while (l < leftSize && r < rightSize) {
    const condition = await chechCondition(leftArray[l], rightArray[r]);
    if (await condition) {
      array[i] = leftArray[l];
      divEl[a].style.height = `${array[i]}px`;
      i++;
      l++;
      a++;
    } else if ((await condition) === false) {
      array[i] = rightArray[r];
      divEl[a].style.height = `${array[i]}px`;
      i++;
      r++;
      a++;
    }
  }
  while (l < leftSize) {
    array[i] = leftArray[l];
    divEl[a].style.height = `${array[i]}px`;
    i++;
    l++;
    a++;
  }
  while (r < rightSize) {
    array[i] = rightArray[r];
    divEl[a].style.height = `${array[i]}px`;
    i++;
    r++;
    a++;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

async function mergeSortMain(array) {
  let length = array.length;

  //base case
  if (length <= 1)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, speed);
    });

  let middle = Math.floor(length / 2);
  let leftArray = new Array(middle);
  let rightArray = new Array(length - middle);

  let i = 0; //left array
  let j = 0; //right array

  for (; i < length; i++) {
    if (i < middle) {
      leftArray[i] = array[i];
    } else {
      rightArray[j] = array[i];
      j++;
    }
  }

  const leftSort = await mergeSortMain(leftArray);
  const rightSort = await mergeSortMain(rightArray);
  const joinMerge = await merge(leftArray, rightArray, array);
}

export async function mergeSort() {
  console.log("Merge Sort Function");

  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  const sorted = await mergeSortMain(divHeight);
}
