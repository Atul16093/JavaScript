/*Singleton object :
means when we create an object, by the help of constructor so the object 
created uniquely.

Ojbect.create : by the help of this we can create singleton or constructor object.

When we declare an object by the help of literals so object not make singleton.
*/

//object literals 
//Behind the scene the key tracked as string 
//Declaring the symbol 
/* When using a Symbol as a key in an object, the Symbol should be defined outside the object for easy reference.
 To use the Symbol as a key, wrap the Symbol name in square brackets [] inside the object.
  This ensures that the Symbol is treated as a unique identifier and not as a string.*/
const mySym = Symbol("key1");
const jsUser = {
    name : "Atul",
    "full name" : "Atul Raghuwanshi",
    age  : 21,
    location : "Indore",
    email : "atulrag3@gmail.com",
    isLoggedIn : false, 
    lastLoginDays : ["Monday" , "Saturday"],
    //The way of declaring symbol as an key 
    [mySym] : "That's my Key1",
} 
/*
Dot Notation (.):

Easy to use for standard property names.

Cannot be used for properties with special characters, spaces, or numbers.

Bracket Notation ([]):

Allows access to properties with special characters, spaces, or dynamic property names.

Dot notation is simpler but limited when dealing with property names containing spaces or special characters.
Bracket notation is more flexible and can handle dynamic or unconventional property names.
 */
console.log(jsUser.name);
/*Here the keys treated as string so you need to write like an string */
console.log(jsUser["name"]);
// we can access special character string by the help of square bracket 
console.log(jsUser["full name"]);
// to check the type of any object 
console.log(typeof jsUser["full name"]);

//checking the type of symbol outside the object not inside.
console.log(typeof mySym);
// console.log(jsUser[mySym]);

jsUser.email = "atulraghuwnashi432@gmail.com";
console.log(jsUser);
/* if we freeze the object we are not able to change the value 
of the object . */
// Object.freeze(jsUser); //Freezing the object 
jsUser.age = 20;
console.log(jsUser.age); // Here the object value not we change cause our object is freeze.

//Function in javaScript 

jsUser.greeting = function(){
    console.log("Hello js user");
    
}

jsUser.greetingTwo = function(){
    // this keyword refear the current object key
    console.log(`Hello js user ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








