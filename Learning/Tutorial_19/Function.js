/* function() is a block of code to perform an specific task , In javaScript if we want to do something multiple time we defined function */

function sayMyName(){
    console.log("A");
    console.log("T");
    console.log("U");
    console.log("L");
}
//It's a function reference
sayMyName;
//It's an execution 
sayMyName();

//Writing an function to add two number 
/*
function addTwoNumber(number1 , number2){
    console.log(number1 + number2);
    
}
addTwoNumber(12 , "Atul");
*/
//Here we are going to write a function which will return the value.

function addTwoNumber(number1 , number2){
  let c = number1 + number2
    return c;
}
let result = addTwoNumber(12,13);
console.log(result);

//Doing some more things on function 
function loginUserMessage(userName){
       if(userName === undefined){ //  !userName it's work same as userName === undefined 
        console.log("The parameter doesn't have any argument ");
        return
       }
       /* if we want to stop the any statement to reach at the end so just define return
       keyword on above to stop the excecution */
        return `${userName} logged in successfully`;
}
console.log(loginUserMessage());






