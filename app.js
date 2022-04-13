const visualizerContainer = document.querySelector(".visualizer__container");
let elements = 150; //25-250
let divHeight = [];

// CREATE DIVS
const createDivs = (elementLength) => {
  for (let i = 0; i < elementLength; i++) {
    const visualizerDiv = document.createElement("div");
    visualizerContainer.appendChild(visualizerDiv);
    visualizerDiv.classList.add("visualizer__contianer__element");
  }
};
createDivs(elements);

// DELETE DIVS
const deleteDivs = () => {
  const visualizerDivEl = document.querySelectorAll(
    ".visualizer__contianer__element"
  );

  for (let i = 0; i < visualizerDivEl.length; i++) {
    visualizerDivEl[i].remove();
  }
};

// GENERATE VISUALIZER STYLES
const generateVisualizer = () => {
  // GET DIV ELEMENTS
  const visualizerDivEl = document.querySelectorAll(
    ".visualizer__contianer__element"
  );
  // GENERATE HEIGHT
  for (let i = 0; i < visualizerDivEl.length; i++) {
    divHeight[i] = Math.floor(Math.random() * 590) + 1;
  }
  // ASSIGN HEIGHT
  for (let i = 0; i < visualizerDivEl.length; i++) {
    visualizerDivEl[i].style.height = `${divHeight[i]}px`;
  }
  // ASSIGN WIDTH
  for (let i = 0; i < visualizerDivEl.length; i++) {
    visualizerDivEl[i].style.width = `${100 / visualizerDivEl.length + 1}%`;
  }
  // SET STYLE IN DIVS
  for (let i = 0; i < visualizerDivEl.length; i++) {
    visualizerDivEl[i].style.backgroundColor = "#8ec7f5";
    visualizerDivEl[i].style.margin = "0 1px";
  }
};
generateVisualizer();

// GENERATE ARRAY BUTTON
const generateArray = document.querySelector(".generate__container");
generateArray.addEventListener("click", () => {
  generateVisualizer();
});

// SLIDER
const sliderLength = document.querySelector(".slider__length");
const sliderSpeed = document.querySelector(".slider__speed");
const lengtEl = document.querySelector(".array__length");
const speedEl = document.querySelector(".array__speed");

sliderLength.addEventListener("input", (e) => {
  lengtEl.textContent = sliderLength.value;
  deleteDivs();
  createDivs(parseInt(sliderLength.value));
  generateVisualizer();
});

sliderSpeed.addEventListener("input", (e) => {
  speedEl.textContent = sliderSpeed.value;
  speed = Math.abs(parseInt(sliderSpeed.value) - 10) * 10;
});
export let speed = 50;
