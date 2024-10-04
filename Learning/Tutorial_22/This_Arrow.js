/*
This keyword refear to the current context of the object,
and the current context avilable inside into any particular scope  */

const user = {
    userName : "ABC",
    price : 999,
    //Here if we declared any function inside any object so that's a way
    welcome : function(){
        console.log(`${this.userName} , welcome to our website `);
        console.log(this);
        
    }
}
user.welcome()
user.userName = "sam";
user.welcome()
console.log(this); // It gave us empty object 

/*In browser if run our javaScript code so at that time our object is window object
but if we run javaScript code on node so at that time our object is empty object console.log(this)*/

function hello(){
    console.log(this);
}
// hello()     


/*Arrow function  introduced in ES 6 */
console.log("Portion of arrow function ");
/*
const func = function (){
    let userName = "Atul";
    console.log(this.userName)
}
func();
*/
//In the arrow function maybe this keyword not work 
function func() {
    let userName = "Atul";
    console.log(userName)
}
func();

/* 
 */
// const addTwo = (num1 , num2) => {
//       return num1 +num2;
// }
// console.log(addTwo(12 , 54));

// if we write in this way so we doesn't need to write the return keyword
//it's called implicit return 
// const addTwo = (num1 , num2) => num1 +num2;//Here we donn't need to write the return statement that's a one more way 
// console.log(addTwo(12 , 54)); //It
const addTwo = (num1 , num2) => (num1 +num2); //it's same as line number 55