'use strict';

//Selecting elements
const body = document.querySelector('body');
const message = document.querySelector('.message');
const inputNumber = document.querySelector('.guess');
const scores = document.querySelector('.score');
const guess = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const highscores = document.querySelector('.highscore');

//Settings
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Functions
const lostGame = function () {
  message.textContent = 'You lost your game';
  scores.textContent = 0;
};

const displayMessage = function (messageGame) {
  message.textContent = messageGame;
};

const setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};

//Event handler
btnCheck.addEventListener('click', function () {
  const myNumber = +inputNumber.value;

  //When there is no input
  if (!myNumber) displayMessage('No number!');
  //When Player wins
  else if (myNumber === secretNumber) {
    guess.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    guess.style.width = '30rem';
    displayMessage('Correct number!');
    if (score > highScore) {
      highScore = score;
      highscores.textContent = highScore;
    }

    //When guess is wrong
  } else if (myNumber !== secretNumber && score > 1) {
    displayMessage(
      myNumber > secretNumber ? 'Too high number' : 'Too low number'
    );
    score--;
    scores.textContent = score;
  } else lostGame();
});

btnAgain.addEventListener('click', function () {
  score = 20;
  scores.textContent = score;
  guess.textContent = '?';
  body.style.backgroundColor = '#222';
  guess.style.width = '15rem';
  inputNumber.value = '';
  setSecretNumber();
  displayMessage('Start guessing...');
});
