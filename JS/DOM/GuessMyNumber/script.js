'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;

let number = document.querySelector('.number');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function(){
displayMessage("Chick the button");
});


