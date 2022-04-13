import { bubbleSort } from "./bubble.js";
import { quickSort } from "./quick.js";
import { mergeSort } from "./merge.js";
import { selectionSort } from "./selection.js";
import { insertionSort } from "./insertion.js";

let sortChoice = 3;

// BUBBLE SORT BUTTON
const bubbleSortBtn = document.querySelector(".algorithms__bubble");

bubbleSortBtn.addEventListener("click", () => {
  sortChoice = 1;
});

// QUICK SORT BUTTON
const quickSortBtn = document.querySelector(".algorithms__quick");

quickSortBtn.addEventListener("click", () => {
  sortChoice = 2;
});

// MERGE SORT BUTTON
const mergeSortBtn = document.querySelector(".algorithms__merge");

mergeSortBtn.addEventListener("click", () => {
  sortChoice = 3;
});

// INSERTION SORT BUTTON
const insertionSortBtn = document.querySelector(".algorithms__insertion");

insertionSortBtn.addEventListener("click", () => {
  sortChoice = 4;
});

// SELECTION SORT BUTTON
const selectionSortBtn = document.querySelector(".algorithms__selection");

selectionSortBtn.addEventListener("click", () => {
  sortChoice = 5;
});

// START SORT BUTTON
const start = document.querySelector(".generate__start");

start.addEventListener("click", () => {
  if (sortChoice === 1) {
    bubbleSort();
  } else if (sortChoice === 2) {
    quickSort();
  } else if (sortChoice === 3) {
    mergeSort();
  } else if (sortChoice === 4) {
    insertionSort();
  } else if (sortChoice === 5) {
    selectionSort();
  }
});
