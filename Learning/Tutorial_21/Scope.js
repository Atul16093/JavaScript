/*What is scope in javaScript?
=> In JavaScript, scope defines where variables, functions, and objects are accessible:

Global Scope: Variables declared outside functions are accessible everywhere in the code.
Function Scope: Variables declared inside a function are only accessible within that function.
Block Scope: Variables declared with let or const inside a block ({}) are only accessible within that block.
JavaScript has lexical scope, meaning the scope is determined by the location where variables are declared, not where they are used
*/
/*
var has global scope and it has been redeclared and update 
const value cann't be update, and redeclared and it has block scope 
let value can be update but not redeclared and it has block scope */
var c = 300;
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a);
    
}
// console.log(a); // let a is inside the function it cann't be used .
// console.log(b); // same as b , b is constant and it cann't be used too.
console.log(c); //  var has global scope 
console.log(a);

// +++++++++++++++++++++++++++++++++++++++Nested function+++++++++++++++++++++++++++++++++
//Nested function in javaScript
function one(){
    const userName = "ABCD";
    function two(num1 , num2){
        const website = "youtube";
        return num1 * num2;
    }
    console.log(two(23 , 45));
}
one();

if(true){
    name = "Atul";
    if(name === "Atul"){
      const  website = "www.github.com" ;
      console.log(`${name} ${website}`);
    }
    // console.log(website); we cann't access the website  
}
// console.log(userName);// this two we cann't access it .

// +++++++++++++++++++++++++++++++Interesting concept+++++++++++++++++++
//console.log(addOne(5)); // It's accessable 
function addOne(num){
    return num+1;
}

//console.log(holding(10));//It's not accessable
const holding = function addOne(num){
    return num+2;
}