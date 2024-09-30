/*
Primitive Data Types in JavaScript:

JavaScript has six primitive data types: Number, String, Boolean, Null, Undefined, and Symbol.
Memory Storage:

When you declare a primitive value (like a number or string), it is stored in the stack memory, which is used for storing simple, small, and fixed-size data.

Call by Value:

In JavaScript, primitives are passed by value.
This means when you assign or pass a primitive variable to another variable or function, a copy of the value is used, not the original value.
Any changes made to the copied value do not affect the original value.

In JavaScript, for primitive data types, values are copied when assigned or passed, and the original data remains unaffected by changes made to the copy. This behavior is known as "call by value."

*/
// call by value

let hisName = "Atul";
let anotherName = hisName;
anotherName = "Unkonwn";
console.log(hisName);
console.log(anotherName);

/*
Non-primitive data types (objects) are stored in heap memory because they are dynamic in size. The stack memory holds a reference (or pointer) to the location in the heap where the object is stored.
Call by Reference:

When a non-primitive type (like an object) is assigned to another variable or passed to a function, a reference to the original object is used, not a copy of the object itself.
This means that changes made to the referenced object will affect the original object as well, since both variables point to the same memory location.*/

// call by reference 

let obj = {
    email : "atulrag3@gmail.com",
    phone_Number : "6265654159",
}

let newObj = obj;
newObj.email  = "atulraghuwanshi038@gmail.com";
console.log(obj);
console.log(newObj);


