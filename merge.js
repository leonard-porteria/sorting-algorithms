import { speed } from "./app.js";

function mergeSortMain(array) {
  let length = array.length;
  if (length <= 1) return; //base case

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
  mergeSortMain(leftArray);
  mergeSortMain(rightArray);
  merge(leftArray, rightArray, array);
}

function merge(leftArray, rightArray, array) {
  let leftSize = Math.floor(array.length / 2);
  let rightSize = array.length - leftSize;
  let i = 0,
    l = 0,
    r = 0; //indices

  //check the conditions for merging
  while (l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l];
      i++;
      l++;
    } else {
      array[i] = rightArray[r];
      i++;
      r++;
    }
  }
  while (l < leftSize) {
    array[i] = leftArray[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    array[i] = rightArray[r];
    i++;
    r++;
  }
}

export async function mergeSort() {
  console.log("Merge Sort Function");

  const arr = [5, 3, 5, 7, 9, 6, 4, 21, 38, 9, 7, 65];
  console.log(arr);

  mergeSortMain(arr);

  console.log(arr);
}
