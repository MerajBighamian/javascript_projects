'use strict'

var car = {
    make : "Ford", 
    model : "Mustang",
    year : "1970",
    details : {
        color:['red','green','black'],
        wheels:5
    },
    price : function(x,y){
        return x+y; 
    },
    summary : function(){
        return "car details is : "+this.year+" "+this.model;
    }
};

// set
car.make = 'IranKhodro';

car.name = 'Samand';
//get
console.log(car.make);
console.log(car.price(12,2)) 

console.log(car.summary())

//-------------
var fullname = function(x,y){
    return x+y;
};

// console.log(fullname('meraj','bighamian'));

var my = new Object();
my.name = "meraj";

console.log(my.name);

//------------------------
console.log('---------------------------------------');
var person = {
    name : "meraj",
    family : "Bighamian",
    age : 17,
    fullname : function(name,family){
        return "full name is  : "+this.name+" "+this.family;
    }
    
} 

var person_2 = new Object(); 

person_2.name = 'ali';
person_2.family = 'sourosh';
person_2.age = '16';
person_2.fullname = function(name,family){
    return "full name is : "+this.name+" "+this.family;
}

console.log(person.fullname());
console.log(person_2.fullname());
