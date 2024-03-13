'use strict';
/*
console.log(document.querySelector('.message').textContent);

//Setting the content 
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//TO get the value from user
document.querySelector('.guess').value;
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
const Number_TOO_LOW = '📉 The number is  too low';
const NUMBER_TOO_HIGH = '📈 The number is too high';
const CORRECT_ANSWER = '👌 Correct Answer!';
const EMPTY_GUESS = '⛔ No Number!';
let score = 20;
let highestScore = 0;
const LOST_GAME = '🤣🤣 You lost the game';
document.querySelector('.check').addEventListener('click' , function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
          document.querySelector('.message').textContent = EMPTY_GUESS;
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = CORRECT_ANSWER;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        highestScore = Math.max(score , highestScore);
    }
    else if(guess !== secretNumber){
        if(score >1){
            document.querySelector('.message').textContent = guess > secretNumber ? NUMBER_TOO_HIGH : Number_TOO_LOW;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = LOST_GAME;
            document.querySelector('.score').textContent = 0;
        }
    }
    document.querySelector('.highscore').textContent = highestScore;
});

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});