// Element selectors in DOM

'use strict'

// method getElementById("id of element");
console.log(document.getElementById("header"));

// method getElementsByTagName("tag name");
console.log(document.getElementsByTagName("li"));

// method getElementsByClassName("class name");
console.log(document.getElementsByClassName("list-group"));

// method getElementsByName("tag name");
console.log(document.getElementsByName("li"));

// select by css selector
// method querySelector("css selector") // return just an element match with this selector
console.log(document.querySelector('.list-group'));

// method querySelectorAll("css selector") // return all elements match with this selector
console.log(document.querySelectorAll('.item-list'));

// example 
document.querySelector('h1').style.color = 'red';
document.querySelector('body').style.backgroundColor = "green";