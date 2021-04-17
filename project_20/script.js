// work with Math

'use strict'

console.log(Math.PI); // return PI number
console.log(Math.abs(-17)); // return absolute number
console.log(Math.floor(1.99)); // returns the greatest integer less than or equal to its numeric argument. 
console.log(Math.random()); // return random number between 0 and 1
console.log(Math.round(1.6)); //  The value to be rounded to the nearest integer. 
console.log(Math.pow(5,12)); // Returns the value of a base expression taken to a specified power. 5 ** 12 

// a function for generate random number
function randomFunction(max){
    return Math.floor(Math.random() * Math.floor(max)); 
}

console.log(randomFunction(6));

