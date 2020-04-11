const container = document.querySelector('.container');
let numOfSquares = 16;

//don't put formulas in for loop initialization, make const
function createGrid(numOfSquares){
  let gridSize = numOfSquares*numOfSquares;

  for (let i=0; i<gridSize; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.setAttribute('data-count', '0');
    container.appendChild(div);
  };
};

createGrid(numOfSquares);

function hoverSquares(){
  let squares = document.querySelectorAll('.square');
  
  //can replace div with square, it's just a parameter name
  squares.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      // div.classList.add('hover');
      let divColor = div.style.backgroundColor;
      
      if (divColor == ""){
        let randomColor = randomNum();
        div.style.backgroundColor = `hsl(${randomColor}, 100%, 50%)`;
      } else {
        let hoverCount = trackCount(div);
        let lightness = (1-hoverCount*0.1);
        div.style.filter = `brightness(${lightness})`;
      };
    });
  });
};

function randomNum(){
  return Math.floor(Math.random() * 360);
};

function trackCount(div){
  let count = div.getAttribute('data-count');
  count++;
  div.setAttribute('data-count', `${count}`);
  return count;
};

hoverSquares();

const button = document.querySelector('button');

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