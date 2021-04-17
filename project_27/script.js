// work with Ajax

'use strict'

var ajax = new XMLHttpRequest();
console.log(ajax);

ajax.open('GET', 'https://jsonplaceholder.typicode.com/users');
ajax.send();


ajax.onreadystatechange = function(){
    // console.log(this);
    if (this.readyState == XMLHttpRequest.DONE){
        if(this.status == 200){
            console.log('done', this.responseText);
      
        }else if(this.status == 404){
            console.log("this api not found!");
        }
    }
};

console.log("---------------------------------------");


// ajax with Event listeners
ajax.addEventListener('load', function(){
    if (this.readyState == XMLHttpRequest.DONE){
        if(this.status == 200){
            console.log('done', this.responseText);
        }else if(this.status == 404){
            console.log("this api not found!");
        }
    }
});



// Http request methods
// method GET : get data from a url
// method POST : post data to a url

