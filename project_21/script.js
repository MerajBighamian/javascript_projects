// Introductio for DOM
// DOM : Document Object Model

'use strict'
//document is a object for handling html elements (dom)
console.log(document.__proto__);
console.log(document.children); // return a HTML Collection
console.log(document.children[0]); // return html tag and children tag
console.log(document.children[0].children) // return html collection (head tag and body tag)

// property head
console.log(document.head); // return head element

// property body
console.log(document.body); // return body element


// property style : for access to style of a elements in web document
document.body.style.backgroundColor = "red"; // change background color of body element 

// property textContent : for access to text content of a element
document.body.children[0].textContent = "Meraj Bighamian";

// property firstElementChild : for access to first child of a element
document.body.firstElementChild.style.color = "white";

// property nextElementSibling : for access to next element sibling
console.log(document.body.firstElementChild.nextElementSibling);