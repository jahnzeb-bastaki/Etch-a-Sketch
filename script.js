const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#36454F'
const DEFAULT_MODE = 1; // 1 is sketch mode, 0 is rainbow mode

let currentGridSize = DEFAULT_GRID_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_COLOR;

function gridSetup(size){
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mousedown', gridActive);
    container.appendChild(gridElement);
  }
}

gridSetup(DEFAULT_GRID_SIZE);

function gridActive(event){

}

window.onload = () => {
  gridSetup(DEFAULT_GRID_SIZE);
}