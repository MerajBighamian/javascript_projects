// exception handling in js with try and catch

'use strict'

try {
    // b = 5;
    // throw "this is an error";
    // throw 50;
    throw {name : 'myerror', message:"this an error for you"};
} catch (error) {
    // console.log(error);
    console.log (error.name , error.message);
}
finally{
    console.log("finally block code!");
}