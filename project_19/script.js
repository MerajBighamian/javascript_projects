// work with time and date

'use strict'

var date = new Date();
console.log(date);

// method getTime() : return time (mili second)
var time = date.getTime();
var afterWeek = time + (1000 * 60 ) * 60 *  24 * 7;
console.log(new Date(afterWeek));

// method now(): return now time and date (mili second)
console.log(Date.now());

// method parse() : get a string time and date('2021/2/21'), then convert to unix time stamp(mili second)
console.log(Date.parse('2021/2/23'));

// geter methods
//getHours() : get hours of object date
console.log(date.getHours());
// geter methods is very so much



//seter methods
//setHours(number of hours) : add hours to hours of object date
console.log(date.setHours(48));
// seter methods is very so much
