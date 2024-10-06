if(4<2){
    console.log("It's ediable for you");
}else if(5<2){
    console.log("It's okay okay ");  
}else{
    console.log("It's not safe for you"); 
}
let balance = 400;
//if(balance > 500) console.log("test"), console.log("test2"); // Don't use this type of syntax

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else{
    console.log("balance is greater than 750");
    
}

/*
This all are falsy values
false value : false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN 
True vlaues :
if we write empty string function , array , function and scope everything consider as function 
"0" , 'false' , " ", [] , {} , function(){}*/

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("It's an empty object");
}else {
    console.log("This object is not empty ");
    
}

// Nullsih Coalescing Operator (??) : null undefined
//This use for handle the null or undefined value 
let var1 ;
// var1 = 5 ?? 10;
// var1 = null ?? 10;
// var1 = undefined ?? 20 
var1 = undefined ?? 20 ?? 10;

console.log(var1);

//Ternary operator 

// condition ? true : false;

const ice = 1000;
ice >= 2000 ? console.log("suffiecent") : console.log("Not much ice");

