// Introduction for Event and Event Handler

'use strict'

var header = document.querySelector("#header");

// handle click event with property onclick
// header.onclick = function(event) {event};


// handle mouse enter event with property onmouseenter
header.onmouseenter = function() {console.log("mouse enter!!")};

// handle double click event with property ondbclick
header.ondblclick = function() {console.log("double click!!")};

// property target : access to ele
header.onclick = function(event){
    event.target.style.backgroundColor = "green";
}

// handle mouse out event with property onmouseout
header.onmouseout = function(e){
    e.target.style.backgroundColor = "yellow";
}