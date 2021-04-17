// work with methods apply & bind & call

'use strict'
var Car = {
    make: "Saipa",
    model: "111",
    displayDetails : function(year,name){
        console.log("maker is : " + this.make + "and model is " + this.model);
        console.log(year, name);
    }
    

}

var Car2 = {
    make: "samand",
    model: "sorna",

}

Car.displayDetails.apply(Car2,[2013,"sara"])

// problem : when we use from 'this' keyword and call a property of object in function that out of object , js will return a error for us

function displayDetails(year, name){
    return this.make + ' ' + this.model + " " + year + " " + name;

}

// for fix this problem us should uses of call or apply or bind method. for example :

// use apply : function.apply(nameOfObject,array of arguments of function)
console.log(displayDetails.apply(Car, [2020,"meraj"]));

// use call : function.call(nameOfObject, argument1 , argument2 , ...)
console.log(displayDetails.call(Car, 2021 , "ali "));


// use bind  : function.bind(nameOfObject, argument1 , argument2 , ...) # not run this function
console.log(displayDetails.bind(Car,2012,'meraj')());