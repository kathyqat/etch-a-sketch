let container = document.querySelector('.container');
let i=0;

do{
  let div = document.createElement('div');
  container.appendChild(div);
  i++;
} while(i<(16*16));