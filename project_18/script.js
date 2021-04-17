// methods of string

'use strict'

var fullname = "  Meraj bighamian   ";

// property length : return length of string
console.log(fullname.length);
console.log("----------------------------------------");
// method charAt(index|position) : return a character of string with this index
console.log(fullname.charAt(2));
console.log(fullname[2]);
console.log("----------------------------------------");


// method concat(string) : concatenation string to main string(method call on)
console.log(fullname.concat(" . im a programmer!"))
console.log("----------------------------------------");

// method toUpperCase() : convert alphabet of string to uppercase alphabet
console.log(fullname.toUpperCase());
console.log("----------------------------------------");

// method toUpperCase() : convert alphabet of string to uppercase alphabet
console.log(fullname.toLowerCase());
console.log("----------------------------------------");

// method split() : split sting to multi part string and every string is a item of returned list 
console.log(fullname.split(' '));
console.log("----------------------------------------");

// method trim() : delete after and before space of main string(have alphabet character)
console.log(fullname.trim());
console.log("----------------------------------------");


// method indexOf() : for search a string in main string
console.log(fullname.indexOf("bigham"));
console.log("----------------------------------------");

// method substr(startindex,length of substring) : make a sub string from main string 
console.log(fullname.substr());
console.log("----------------------------------------");

// method replace(oldstring , newstring)
console.log(fullname.replace('Meraj','Taha'));
console.log("----------------------------------------");