import { speed } from "./app.js";

// CHECK MAIN CONDITION
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

// WAIT
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

async function mergeSortMain(array, prevArray, addIndex) {
  let length = array.length;
  // BASE CASE
  if (length <= 1)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, speed);
    });

  let middle = Math.ceil(length / 2);
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

  const leftSort = await mergeSortMain(leftArray, leftArray.length, prevArray);

  const rightSort = await mergeSortMain(
    rightArray,
    rightArray.length,
    leftSort
  );

  //  console.log("add Index", addIndex);

  if (addIndex === undefined) {
    addIndex = 0;
    console.log("undefined", addIndex);
  } else {
    console.log("defined", addIndex);
  }

  merge(leftArray, rightArray, array, addIndex);

  return prevArray;
}

async function merge(leftArray, rightArray, array, addIndex) {
  // DIV VARIABLE
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  // VARIABLES
  let leftSize = Math.ceil(array.length / 2);
  let rightSize = array.length - leftSize;

  let i = 0;
  let l = 0;
  let r = 0;

  let a = addIndex + i;

  // SORT LEFT AND RIGHT ARRAYS INDIVIDUALLY
  while (l < leftSize && r < rightSize) {
    const mainCondition = await checkCondition(leftArray[l], rightArray[r]);
    if (await mainCondition) {
      array[i] = leftArray[l];
      divEl[a].style.height = `${array[i]}px`;
      i++;
      l++;
      a++;
    } else if ((await mainCondition) === false) {
      array[i] = rightArray[r];
      divEl[a].style.height = `${array[i]}px`;
      i++;
      r++;
      a++;
    }
  }
  // MERGE LEFT ARRAY
  while (l < leftSize) {
    const leftCondition = await wait();
    if (await leftCondition) {
      array[i] = leftArray[l];
      divEl[a].style.height = `${array[i]}px`;
      i++;
      l++;
      a++;
    }
  }
  // MERGE RIGHT ARRAY
  while (r < rightSize) {
    const rightCondition = await wait();
    if (await rightCondition) {
      array[i] = rightArray[r];
      divEl[a].style.height = `${array[i]}px`;
      i++;
      r++;
      a++;
    }
  }
}

export async function mergeSort() {
  console.log("Merge Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }
  mergeSortMain(divHeight);
}
