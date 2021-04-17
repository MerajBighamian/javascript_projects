// work with Ajax - method POST

'use strict'

var ajax = new XMLHttpRequest();

var data = {
    name : 'merajbighamian',
    email : 'merajbighamian@gmail.com'
};

ajax.open('POST', 'https://jsonplaceholder.typicode.com/users');
ajax.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

ajax.addEventListener('load', function(){
    if(this.readyState == XMLHttpRequest.DONE){
        if(this.status == 201){
            console.log(this.responseText);
            var resData = JSON.parse(this.responseText);
            console.log(resData.name);
        }else if(this.status == 404){
            console.log("this url is not valid!");
        }
    }
});

ajax.send(JSON.stringify(data));
