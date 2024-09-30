/* How to add data into the memory and access it. According to this the datatypes divided into the two categerious.
Primitive type 

The primitive data type is known as the "call by value" data type. This means that when we copy data from one place to another, the reference is not given, but rather a copy is made. Therefore, if we make changes, they occur in the copy and not in the original value.

7 types : String, Number, Boolean, null, undefined, Symbol,Biglnt
*/
const str = "Hello";
console.log(typeof str);

const num = 4323;
console.log(typeof num);

const b = true;
console.log(typeof b);

const n  = null;
console.log(typeof n);

let un ;
console.log(typeof un);

//Symbol always unique 
let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id === anotherId);

//bigInt
const bigInt =132343455454545654545543n
console.log(typeof bigInt);

/*
Reference type (Non primitive type )
it can be allocate us the reference of the memory 
*/
let arr = ["Hello", 1 , 1.2 , null];
console.log(typeof arr)

//Declaring an object 
let obj = {
    name : "hitesh",
    age  : 12,
}
console.log( obj);

//Declaring an funtion 
const func= function(){
    console.log("Hello world ");
}