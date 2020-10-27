'use strict'

Object.prototype.helloWorld = function(){
    return 'sum';
};

var car1 = {
    name : 'ford',
    model : 'mostang'
}; 

function Car(model , year, name) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.fullName = function(){
        return 'this is model is :' +this.model;
    }
    
}

Car.prototype.fun = function(){
    return 'fun';
};

 Car.prototype.helloWorld= function(){
     return 'helloworld';
};
var car2 = new Car('ford','1998','mostang');


function Person(name,family){
    this.family = family;
    this.name = name;
};
Person.prototype.helloWorld = function(){
    return 'Hello world!';
}
var me = new Person('meraj', 'family');


var status = new Boolean(true);
var name = new String('meraj');
var age = new Number(12); 






console.log(car1)
console.log(car2)