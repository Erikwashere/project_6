const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn__reset');
const div = document.getElementById('overlay');
const lostHeart = document.querySelectorAll('.tries img');

let missed = 0;

const phrases = [
  'beagle',
  'golden retriever',
  'german shorthaired pointer',
  'goldendoodle',
  'pug'
];

startGameBtn.addEventListener('click', () => {
  div.style.display = 'none';
});

function getRandomPhraseAsArry(arr) {
  return arr[Math.floor(Math.random()*arr.length)].split('')
};


function addPhraseToDisplay(arr) {
  for ( let i = 0; i < arr.length; i++) {
    let liList = document.createElement('li');
    let ulList = document.querySelector('#phrase ul');
    liList.textContent = arr[i];
    ulList.appendChild(liList);

    if (liList.textContent === ' ') {
      liList.className = 'space';
    } else {
      liList.className = 'letter';
    }
  }
};

const phraseArray = getRandomPhraseAsArry(phrases);
addPhraseToDisplay(phraseArray)

function checkLetter(button) {
  let checkLetter = document.querySelectorAll('.letter');
  let match = null;

  for ( let i = 0; i < checkLetter.length; i++) {
    if (checkLetter[i].textContent === button.textContent) {
      checkLetter[i].classList.add('show');
      match = true;
    }
  }
  return match;
};

qwerty.addEventListener('click', (e) => {
  if( e.target.tagName === 'BUTTON' ) {
    e.target.className = 'chosen';
  } if ( e.target.className === 'chosen' ) {
    e.target.disabled = 'true';
    let letterFound = checkLetter(e.target);
    if ( letterFound === null ) {
      missed += 1;
      lostHeart[missed - 1].src = "images/lostHeart.png";
    }
  }
  checkWin();
});

function checkWin () {
  const letter = document.querySelectorAll('.letter');
  const show = document.querySelectorAll('.show');

  if ( letter.length === show.length ) {
    overlay.className = 'win';
    document.querySelector('h2').innerHTML = 'Congrats You Win!';
    overlay.style.display = 'flex';
  } else if ( missed > 4 ) {
    overlay.className = 'lose';
    document.querySelector('h2').innerHTML = "You lost! Try again";
    overlay.style.display = 'flex';
  }
};
