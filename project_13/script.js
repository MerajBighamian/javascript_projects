// Inheritance in concept prototype

'use strict'

function Car(name,model){
    this.name = name;
    this.model = model;
}

var car1 = new Car('pride','1395');
car1.color = 'white';
// one way for create a object ==>  use  from constructor function Object() and use method create() for create a object
// and we should give a value to create() method. for example :

var car2 = Object.create(null);

// until create a object of way above , this object have not prototype(have not __proto__ object)

// car3 a object that inherite of car1 object

var car3 = Object.create(car1);

var car4 = Object.create(car3);

// overwrite properties of parent object
car4.color = 'yellow';
car4.name = 'samand';




