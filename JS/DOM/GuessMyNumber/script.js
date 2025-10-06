'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

function message(message){
document.querySelector('.message').textContent=message;
}

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function(){

let gessNumber = Number(document.querySelector('.guess').value); 

if(!gessNumber){
  message("Please enter a valid number between 1 to 20");
} else if(gessNumber===secretNumber){
  message("Congratulation Well Done!!!");
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector(".number").textContent = secretNumber;
}else if(gessNumber>secretNumber){
  message("Too big");
  score--;
}else {
  message("Too small");
  score--;
}
 document.querySelector(".score").textContent = score;
});