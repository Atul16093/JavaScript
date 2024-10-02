const score = 400;
console.log(score);
/*
let store = new Number(123) ;

Doing some investigation
let obj = store;
obj = new Number(656);
console.log(obj);
console.log(store);
*/

const balance = new Number(234);
console.log(balance);

//By the help of toString() method, we can convert our number to String here we need to remove the length function or property.
const cont = balance.toString().length;
console.log(cont);
console.log(typeof cont);

//toFixed method help us to set the decimal value, means how much value we want to see.
console.log(balance.toFixed(2))


//Use toPrecision method carefully, Use this method  when you know the digit of number .
const otherNumber = 123.898;
// const otherNumber = 1223.898;
console.log(otherNumber.toPrecision(3));

// Use this method when you need comma seprated value 
const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-in'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

//Math.round method give us the round figure.

console.log(Math.round(4.657));

// Math.ceil() :  It rounds the value up to the next integer, regardless of how small the fractional part is.
console.log(Math.ceil(4.234));

//absolute value abs() function help us to change the value from negative to positive.
console.log(Math.abs(-4));

//It's give us the first value cann't round figure anything .
console.log(Math.floor(5.8));

//Max value  this function give us the maximum value 
console.log(Math.max(14,25,65));

//Min min() this function give us the minimum value 
console.log(Math.min(3,4,6,-1,12));

//random() function use : 
 
console.log(Math.random());

// We are using +1 cause sometime it gave us random value like this 0.012353 Here the problem if, sometime the second value is also 0 that's why we added +1 
console.log(Math.random() *10 +1);

const min = 10; 
const max = 20;

//Here is the little formula for get two digit value.

console.log(Math.floor(Math.random() * (max-min +1) + min)); 