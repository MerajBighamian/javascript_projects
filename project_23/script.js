// Create and Remove Element in DOM

'use strict'

{/* <ul class="list-group">
    <li class="list-item">1</li>
    <li class="list-item">2</li>
    <li class="list-item">3</li>
    </ul> */}

// method createElement("tag name") : for create a Element with javascript
var ul = document.createElement("ul");
 
// property classList : for access to class list of a element
// method add("class name") : add class name to class list of element
ul.classList.add("list-group");

// property id : for access to id of element
// element.id = "list-group";
 
// method setAttribute("nameOfAttribute", "valueOfAttribute")
ul.setAttribute("id","list-group");

var li1 = document.createElement('li');
li1.classList.add("list-item");
li1.textContent = "Item 1";

var li2 = document.createElement('li');
li2.classList.add("list-item");
li2.textContent = "Item 2";

// method appendChild(child element) : add child element to main element
ul.appendChild(li1);
ul.appendChild(li2);

// method after() : add after a element string or other elements
document.querySelector('h1').after(ul);

// method before() : add before a element string or other elements
document.querySelector('h1').before(ul);

// method removeChild('tagname child') : remove child element with tag name of child
document.querySelector('h1').removeChild(document.querySelector('span'));


// method remove() : remove a element with name of element
document.querySelector('h1').remove();

// property parentElement : for access to parent element of this element
console.log(document.querySelector('ul').parentElement);


// console.log(ul) 