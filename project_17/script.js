// timer and interval

'use strict'


// function setTimeout(call back function, time(mili second))
setTimeout(() => {
    console.log("Hello im meraj");
},10000);

// function setInterval(call bach function, period of time)
setInterval(function(){
    console.log("meraj");
},2000);

var i = 0;
setInterval(() => {

    console.log(i);
    i++;
},1000)