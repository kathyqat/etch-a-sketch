let container = document.querySelector('.container');
let i=0;

do{
  let div = document.createElement('div');
  container.appendChild(div);
  i++;
} while(i<(16*16));

let squares = document.querySelectorAll('div');

squares.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    div.classList.add('hover');
  });
});