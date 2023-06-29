const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#36454F'
const ERASE_COLOR = 'lightgrey';
const DEFAULT_MODE = 0; // 1 is sketch mode, 0 is rainbow mode

let currentGridSize = DEFAULT_GRID_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let mouseSelect = false;

// Check if mouse is down on body or .container
document.querySelector('body').addEventListener('mousedown', setMouseSelect);
document.querySelector('body').addEventListener('mouseup', setMouseSelect);
document.querySelector('.container').addEventListener('mousedown', setMouseSelect);
document.querySelector('.container').addEventListener('mouseup', setMouseSelect);

// Sets the grid of divs in the .container div
function gridSetup(size){
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mousedown', gridActive);
    gridElement.addEventListener('mouseover', gridActive);
    gridElement.addEventListener('mouseup', gridActive);
    container.appendChild(gridElement);
  }
}

// When mousedown and dragging, the grid-element will be active
function gridActive(event){
  // boolean value for when mouse goes down,
  // and for when mouse goes up
  if(event.type == 'mousedown'){
    mouseSelect = true;
  } else if(event.type == 'mouseup'){
    mouseSelect = false;
  }

  // If mouse is down and moving inside .container,
  // then grid is active and the user can sketch
  if(mouseSelect){
    if(currentMode){
      this.style.backgroundColor = DEFAULT_COLOR;
      console.log(currentMode);
    } else {
      let rValue = Math.floor(Math.random() * 256);
      let gValue = Math.floor(Math.random() * 256);
      let bValue = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
    }
  }
}

function setMouseSelect(event){
  if(event.type == 'mousedown')
    mouseSelect = true;
  if(event.type == 'mouseup')
    mouseSelect = false;
}

window.onload = () => {
  gridSetup(DEFAULT_GRID_SIZE);
}