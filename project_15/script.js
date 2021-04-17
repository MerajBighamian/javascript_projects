// debug code in js

'use strict'

var i = 0;
var list = [];

while(i < 10){
    debugger;
    if(i % 2===0){
        console.log("E")
    }
    else{
        console.log("O")
    }

    if(i%2 !== 0){
        list.push(i);
    }
    i++;
}

console.log(list)