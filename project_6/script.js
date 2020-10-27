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



var a = 2;
a= parseInt(a);

function check(a){
    if (a < 10){
        switch(true){
            case (a==2):
                console.log("is prime 2 ", a);
                break;
            case (a==3):
                console.log("is prime 3 ", a);
                break;
            case (a==5):
                console.log("is prime 5 ", a);
                break;
            case (a==7):
                console.log("is prime 7 ", a);
                break;
            default:
                console.log("is not prime", a);
                break;
        }
    }
    else if(a==10){
        console.log("is not prime is 10",a);
    }
    else{
        console.log("out of range",a);
    }
}
console.log(a)