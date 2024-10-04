/*
IIFE (Immediately Invoked Function Expression) to Manage Global Scope Variables
Global variables can be accidentally modified by functions, leading to unexpected behavior.
IIFE provides a solution by creating a local scope, preventing global variables from being affected. */

 (function f1(){
    console.log("DB connected");
    
 }) ();
//  we need to end the line why the help of semi colon 
//  Here the first paranteses is our function and the second paranteses is calling the function 
//Also we use iife with arrow function 
( () => {
    console.log("DB Connected again");
    
})();