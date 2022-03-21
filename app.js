// Almacenar en variables todos mis elementos html

let character = document.querySelector('#character');
let block = document.querySelector('#block');
let game = document.querySelector('.container');
let btn = document.querySelector('.reload');
let puntuacion = document.querySelector('.puntuacion');
let lose = document.querySelector('.lose');

// Puntuacion inicial

let n = 0;

// Funcion de saltar

function jump() {
  // Si el personaje no tiene la clase animate salta, esto es para evitar que apretemos rapido el saltar y siga saltando

  if (character.classList != 'animate') {
    character.classList.add('animate');
  }

  // un timeout para que elimine el salto a las 500 milesimas

  setTimeout(() => {
    character.classList.remove('animate');
  }, 500);
}

// timeout para saber si el personaje colisiono con el bloque cada 10ms

let checkDead = setInterval(() => {
  // tomo el dato de la posicion en top del personaje

  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );

  // tomo el dato de la posicion en left del bloque

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );

  // si el bloque se encuentra a entre 0 y 20px, y el personaje a menos de 130px (150px posicion normal, 100px posicion de salto) entonces el personaje colisiono con el bloque y detengo toda la animacion

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = 'none';
    block.style.display = 'none';
    clearInterval(score);
    lose.innerHTML = 'Has perdido';
  }
}, 10);

// Intervalo para contar los puntos

let score = setInterval(() => {
  n += 1;
  puntuacion.innerHTML = n;
}, 1000);

// Listeners

btn.addEventListener('click', () => {
  location.reload();
});

game.addEventListener('click', () => jump());
