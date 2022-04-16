//const circle = document.querySelector('.circle')

//circle.addEventListener('click', turnRed)

/*
const circles = document.querySelectorAll('.circle')

for (let i =0; i < circles.length; i++){
  circles[i].addEventListener('click', turnRed)
}

function turnRed() {
  this.style.backgroundColor = 'red';
}
*/

/* */

const circle = document.getElementById('circle');

function turnRed() {
  circle.style.backgroundColor = 'red';
}

function moveRight(){
  circle.classList.add('animate')
}

function animateElement(){
  turnRed();
  moveRight();
}

circle.addEventListener('click', animateElement
)
