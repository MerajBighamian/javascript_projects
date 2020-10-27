'use strict'

function Car(model , year) {
    // name : "pride"
    this.model = model;
    this.year = year;
    this.fullName = function(){
        return 'this is model is :' +this.model;
    }
}

var myCar = new Car('pride' , 1370);

console.log(myCar.fullName());

var aliCar = new Car('mustang',1900);
 
console.log(aliCar.fullName());
console.log(aliCar.model);

console.log('----------------------------------------------------------------------------------------------');

function Person(name,family,age,height,weight){
    this.name = name;
    this.family = family;
    this.age = age;
    this.height= height;
    this.weight = weight;
    this.fullName = function(){
        return this.name+" "+this.family;
    }
}


var meraj = new Person('meraj','bighamian',17,178,55);
console.log(meraj);
console.log(typeof meraj);
console.log(meraj.fullName())
