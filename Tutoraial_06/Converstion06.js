// Here we are converting some value into a number 
// let score = "33";  /// Number = 3
// let score = "Hello" // NaN
// let score = "23abc";
let score = undefined; // NaN
// let score = null;  // 0

// There are two ways to know the type of the variable
console.log(typeof score);
console.log(typeof(score));

//Converting the value (String type ) into a number 

let valueInNumber = Number(score);

console.log("Here the converted value is : "+ valueInNumber);

// Here we are converting the value into boolean

let isLoggedIn = 0 

console.log("Before converstion the value type is : "+ typeof isLoggedIn)
let valueIsLoggedIn  = Boolean(isLoggedIn);
console.log("The value after converstion : "+ valueIsLoggedIn);

// 0 => false ; 1 => true 

// Now we are going to convert the value into the string 

let value = 12;
console.log("The type of the value before converstion is : "+typeof value);
let convertedValue = String(value);
console.log("The type of the value after converstion is : "+ typeof convertedValue)
console.log("The vlaue is : "+ convertedValue);

//Let's try with floating value : 

let fValue = 12.5;
console.log(typeof fValue);
