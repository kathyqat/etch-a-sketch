let container = document.querySelector('.container');
let numOfSquares = 16;

function createGrid(numOfSquares){
  for (let i=0; i<(numOfSquares*numOfSquares); i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.appendChild(div);
  };
};

createGrid(numOfSquares);

function hoverSquares(){
  let squares = document.querySelectorAll('.square');
  
  squares.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      div.classList.add('hover');
    });
  });
};

hoverSquares();

let button = document.querySelector('button');

button.addEventListener('click', (e) => {
  let removedSquares = document.querySelectorAll('.square');
  
  removedSquares.forEach((div) => {
    container.removeChild(div);
  });
  
  numOfSquares = window.prompt("How many squares should the sides of the new grid be?");
  
  createGrid(numOfSquares);
  container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  hoverSquares();
});