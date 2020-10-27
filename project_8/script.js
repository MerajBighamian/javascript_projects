'use strict'

var list = [1,2,3,4,5,6,7,45];

// define a function of sum item array by for loop

function sum(arr){
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        total= total + arr[i];
    }
    return total;
}

//console.log(sum(list));




//----------------------------------------------------------------

// define a function of sum item array by while loop

function sum_while(array){
    var total = 0;
    var i = 0;
    while(i < array.length){
        total+=array[i];
        i++;
    }
    return total;
}

//console.log(sum_while(list));

//--------------------------------------------------------------

// define a function of sum item array by forEach method

function sum_forEach(array) {
    var total = 0;
    array.forEach(function(item){
        total+= item
    });
    return total;
}

//console.log(sum_forEach(list));

//--------------------------------------------------------------
 
// define a function of sum item array by reduce method

function sum_reduce(array){
    return array.reduce(function(total,value){
       return total+value
    },10);
}
console.log(sum_reduce(list));


//----------------------
// var total= 0; 
var b = [1,2,3,4,5,6,7,8,9];
// b.forEach(function(item){
//     total+=item;
// })

// console.log(total);

//-------------------------

console.log(b.reduce(function(total,item){
   total*=item;
   return total;
}))