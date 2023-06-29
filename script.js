const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#36454F'
const ERASE_COLOR = 'lightgrey';
const DEFAULT_MODE = 'sketch';

let currentGridSize = DEFAULT_GRID_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let mouseSelect = false;

// Check if mouse is down on body or .container
document.querySelector('html').addEventListener('mousedown', setMouseSelect);
document.querySelector('html').addEventListener('mouseup', setMouseSelect);
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
    if(currentMode == 'sketch'){
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

//controls how mouse functions outside of container
function setMouseSelect(event){
  if(event.type == 'mousedown')
    mouseSelect = true;
  if(event.type == 'mouseup')
    mouseSelect = false;
}

function clearGrid(){
  let container = document.querySelector('.container');
  for(let i = 0; i < currentGridSize * currentGridSize; i++){
    container.removeChild(document.querySelector('.grid-element'));
  }
}

function gridReload(){
  clearGrid();
  gridSetup(currentGridSize);
}

function setMode(e){
  let mode = e.target.getAttribute('id');
  if(mode != currentMode){
    gridReload();
  }

  
  if(mode == 'sketch'){
    currentMode = 'sketch';
  } else {
    currentMode = 'rainbow';
  }
}

// Control Elements
let clear = document.getElementById('clear');
let rainbow = document.getElementById('rainbow');
let sketch = document.getElementById('sketch');

// Button Functions
clear.onclick = () => gridReload();
rainbow.onclick = e => setMode(e);
sketch.onclick = e => setMode(e);

window.onload = () => {
  gridSetup(DEFAULT_GRID_SIZE);
}