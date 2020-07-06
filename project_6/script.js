'use strict'
var num = 10;
switch(num){
    case 10 :
        console.log("print 10");
        break;
    default:
        console.log("its wrong  ")
}

var input = 25;

switch (input) {
    case (input>40):
        console.log("it is big number");
        break;
    case (input ==40 || input==25):
        console.log("it is a realy number !")
    default:
        console.log("it is leaste number?")
        break;
}



//  print day name of week in console browser.

var date = new Date()
var day_of_week = date.getDay()

switch(day_of_week){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
   
}