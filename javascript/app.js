const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn_reset');
const div = document.getElementById('overlay');

let missed = 0;

const phrases = [
  'beagle',
  'golden retriever',
  'german shorthaired pointer',
  'golden doodle',
  'pug'
];

startGameBtn.addEventListener('click', () => {
  div.style.display = 'none';
});
