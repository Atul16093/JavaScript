/*
some time global scope variable , can be change the vlaue of our function so 
 overcome this  problem , we use iffe concept */

 (function f1(){
    console.log("DB connected");
    
 }) ()
 let a = 10
//  we need to end the line why the help of semi colon 
//  Here the first paranteses is our function and the second paranteses is calling the function 
// ( () => {
//     console.log("DB Connected again");
    
// })();