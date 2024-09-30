

//It's a old way and , we didn't use this way 
let name = "Hello";
let num  = "100";
//It's also a concatination way 
/*
let con = `${name}${num}`
console.log(con)
*/
console.log(name + num );

//String interpolation 

console.log(`My name is ${name} and My value is ${num}`);
const a = new String('Hello');

// const store = a;

// console.log(store.toUpperCase());
// console.log(a);
 
console.log(a[2]);
console.log(a.__proto__);

//Use some method of the string 
const str = new String("Atul Raghuwanshi");

//This method give us the character, when we passed the index
console.log(str.charAt('3'));

// It give us the slice of the string 
console.log(str.slice(5 , 8));

//It gave us the index , if we pass charater , if the charater is avilable it give us the charater index.
console.log(str.indexOf('R'));

// include() method

const url = "https//www.youtube.com"
console.log(url.includes("www"));




