'use strict'

console.log('rock....');
console.log('paper....');
console.log('scissors....');

var randomNumber = Math.floor((Math.random() * 3) + 1);
var computerMove = '';
switch(true){
    case randomNumber == 'rock':{
        computerMove = 'rock';
        console.log("rock")
        break;
    }
    case randomNumber == 'paper':{
        computerMove = 'paper';
        console.log("paper");
    }
    case randomNumber == 'scissors':{
        computerMove = 'scissors';
        console.log("scissors");
    }
}

console.log(computerMove);