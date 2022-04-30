import { bubbleSort } from "./algorithms/bubble.js";
import { quickSortLomuto } from "./algorithms/quickLomuto.js";
import { mergeSort } from "./algorithms/merge.js";
import { selectionSort } from "./algorithms/selection.js";
import { insertionSort } from "./algorithms/insertion.js";
import { heapSort } from "./algorithms/heap.js";
import { quickHoareSort } from "./algorithms/quickHoare.js";
import { cocktailShaker } from "./algorithms/cocktail.js";

let sortChoice = 0;

// BUBBLE SORT BUTTON
const bubbleSortBtn = document.querySelector(".algorithms__bubble");

bubbleSortBtn.addEventListener("click", () => {
  sortChoice = 1;
});

// QUICK SORT [LOMUTO] BUTTON
const quickLomutoSortBtn = document.querySelector(".algorithms__quickLomuto");

quickLomutoSortBtn.addEventListener("click", () => {
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

// HEAP SORT BUTTON
const heapSortBtn = document.querySelector(".algorithms__heap");

heapSortBtn.addEventListener("click", () => {
  sortChoice = 6;
});

// QUICK SORT [HOARE] SORT BUTTON
const quickHoareSortBtn = document.querySelector(".algorithms__quickHoare");

quickHoareSortBtn.addEventListener("click", () => {
  sortChoice = 7;
});

// COCKTAIL SHAKER BUTTON
const cocktailShakerBtn = document.querySelector(".algorithms__cocktail");

cocktailShakerBtn.addEventListener("click", () => {
  sortChoice = 8;
});

// START SORT BUTTON
const start = document.querySelector(".generate__start");

start.addEventListener("click", () => {
  if (sortChoice === 1) {
    bubbleSort();
  } else if (sortChoice === 2) {
    quickSortLomuto();
  } else if (sortChoice === 3) {
    mergeSort();
  } else if (sortChoice === 4) {
    insertionSort();
  } else if (sortChoice === 5) {
    selectionSort();
  } else if (sortChoice === 6) {
    heapSort();
  } else if (sortChoice === 7) {
    quickHoareSort();
  } else if (sortChoice === 8) {
    cocktailShaker();
  } else {
    console.log("Choose a Sorting Algorithm");
  }
});
