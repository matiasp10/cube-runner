let character = document.querySelector('#character');
let block = document.querySelector('#block');
let game = document.querySelector('.container');
let btn = document.querySelector('.reload');
let puntuacion = document.querySelector('.puntuacion');
let lose = document.querySelector('.lose');
let n = 0;

function jump() {
  if (character.classList != 'animate') {
    character.classList.add('animate');
  }
  setTimeout(() => {
    character.classList.remove('animate');
  }, 500);
}

let checkDead = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = 'none';
    block.style.display = 'none';
    clearInterval(score);
    lose.innerHTML = 'Has perdido';
  }
}, 10);

let score = setInterval(() => {
  n += 1;
  puntuacion.innerHTML = n;
}, 1000);

btn.addEventListener('click', () => {
  location.reload();
});

game.addEventListener('click', () => jump());
