import { speed } from "./app.js";

// PAINT
function checkPaint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// CONDITION
function chechCondition(j, i) {
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
    divEl[k].style.backgroundColor = "#8ec7f5";
  }

  for (let j = start; j <= end; j++) {
    const condition = await chechCondition(array[j], pivot);
    divEl[start].style.backgroundColor = "red";
    divEl[end].style.backgroundColor = "blue";
    if (await condition) {
      i++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      // UPDATE DIV
      divEl[i].style.height = `${array[i]}px`;
      divEl[j].style.height = `${array[j]}px`;
      //STYLE DIV
      divEl[j].style.backgroundColor = "green";
      divEl[j + 1].style.backgroundColor = "yellow";
      divEl[i].style.backgroundColor = "pink";
    } else if ((await condition) === false) {
      divEl[j].style.backgroundColor = "green";
      j === end
        ? (divEl[j].style.backgroundColor = "yellow")
        : (divEl[j + 1].style.backgroundColor = "yellow");
    }
  }
  i++;
  let temp = array[i];
  array[i] = array[end];
  array[end] = temp;

  // UPDATE DIV
  divEl[i].style.height = `${array[i]}px`;
  divEl[end].style.height = `${array[end]}px`;
  // STYLE DIV
  divEl[i].style.backgroundColor = "green";
  divEl[start].style.backgroundColor = "green";
  divEl[end].style.backgroundColor = "green";

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
  const firstSort = await quickSortMain(array, start, (await pivot) - 1);
  const secondSort = await quickSortMain(array, (await pivot) + 1, end);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, speed);
  });
}

// EXPORT FUNCTION
export async function quickSort() {
  console.log("Quick Sort Function");
  // VARIABLES
  const divEl = document.querySelectorAll(".visualizer__contianer__element");
  const divHeight = [];

  // STORE HEIGHT
  for (let i = 0; i < divEl.length; i++) {
    divHeight[i] = divEl[i].offsetHeight;
  }

  const sorted = await quickSortMain(divHeight, 0, divHeight.length - 1);

  for (let i = 0; i < divHeight.length; i++) {
    const paint = await checkPaint();
    if (await paint) {
      divEl[i].style.backgroundColor = "pink";
    }
  }
}
