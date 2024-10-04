/*Rest operator and spread operator 
both declare as  same way in javaScript , rest operator same as java varargs ...x*/

function calculateCartPrice(...num1){
    return num1;
}
//Rest operator return value in an array
console.log(calculateCartPrice(121 , 124 , 345 , 241));

//Way of pass object into the function 
const productDetail = { 
    productName  : "Samsung s24 ultra",
    price  : 140000,
}
function obj(anyObject){
    //Here we are accessing the value by the help of dot 
    console.log(`Name of the product is ${anyObject.productName} and price of the product is ${anyObject.price} `)
}
obj(productDetail);

//Declaring array as an function 
let newArray = [100,200 ,500,300];
function returnArray(getArray){
    return getArray[1];
}
console.log(returnArray(newArray)); 