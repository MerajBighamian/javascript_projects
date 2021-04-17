// Introduction EventListener

'use strict'

var el1 = document.querySelector('.el1');
var el2  = document.querySelector('.el2');

// method addEventListener('type of event', callback function)
el1.addEventListener('click', function(){
    console.log("el1");
});



var functionOfel2 = function(e){
    // resolve problemf
    e.stopPropagation(); // When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
    console.log("el2");
};
el2.addEventListener('click', functionOfel2);

setTimeout(function(){
    el2.removeEventListener('click', functionOfel2);
},2000);


var link = document.querySelector('a');
link.addEventListener('click', function(e){
    e.preventDefault() // If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
});

