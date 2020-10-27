'use strict'

var list = [1,2,3,4,5];

// push method of array
list.push(6);
list.push(10);
list.push(12);
console.log(list);
console.log('------------------------------------------');

console.log(list.pop());
console.log(list);

console.log('------------------------------------------');

console.log(list.shift());
console.log(list.shift());
console.log(list);
list.unshift(100);
list.unshift('meraj');
console.log(list);

console.log('------------------------------------------');

console.log(list.indexOf(3));
console.log(list[list.indexOf(6)]);

console.log('------------------------------------------');
console.log(list);
console.log(list.splice(2,1));
console.log(list);

console.log('------------------------------------------');
console.log(list.slice(0,2));


console.log('------------------------------------------');
console.log(list.join(''));

console.log('------------------------------------------');
console.log(list.join(''));

console.log('------------------------------------------');
console.log(list.sort());

console.log('------------------------------------------');
console.log(list.reverse());

console.log('------------------------------------------');
var filterList = [1,2,3,4,5,6,8,9,74,5,125,63,64,22];
console.log(filterList.filter(function(item){
    return item % 2 == 0;
}));

console.log('------------------------------------------');
console.log(filterList.map(function(item){
    return item*2;
}));
