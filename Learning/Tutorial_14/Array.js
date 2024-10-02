//array
/*
The arrays is an object , similar like other programming language , it's 
store multiple items under a single variable 

Important note : In javaScript arrays are resizable and can contain a mix of differet data types.

Array element access by indexing not by arbitary strings as indexes.
Arrays start from 0 .

Concept of Shallow copies and deep copies 

JavaScript array-copy-operations create shallow copies. (All standard built-in copy operations with any javaScript objects create shallow copies , rather than deep copies ).

A shallow copy of an object is a copy whose properties share the same references((point to the smae underlying value)) as those . like a heap memory .

Deep copies : A deep copy of an object is a copy whose properties do not share the same reference . like an stack memory.
 */

const myArr = [0,1,12,3,4];
console.log(myArr[2]);
console.log(myArr);
const myCartoon = ["Doraemon , Oggy and the cockroaches"];
console.log(myCartoon);

//push() method help us to adding the value into the array 
myArr.push(45);
myArr.push(10);
console.log(myArr);

//pop() method remove the last value from the array 
myArr.pop();
console.log(myArr);

//unShift adds the value at the beginning, but it's not efficient, as it may affect system performance due to multiple shift operations. 
myArr.unshift(9);
console.log( myArr);

//shift() method remove the starting value from the array 

myArr.shift();
console.log(myArr)

//Some method for use for asking the question from the array like any value is exist in the array or not etc .

console.log(myArr.includes(0));

//indexOf give the value index
console.log(myArr.indexOf(9));

// join() method change the array type into the string

let myNewArr = myArr.join();
console.log(myArr);
console.log(myNewArr); 
console.log(typeof myArr);
console.log(typeof myNewArr);

//slice() and splice() method  there are some difference between both method 
//slice() method

/*
Purpose: Extracts a portion of an array without modifying the original array.
Behavior: Returns a new array containing the selected elements based on the start and end indices.
Original Array: Remains unchanged after using slice().

Purpose: Removes or adds elements to an array at a specified position, modifying the original array.
Behavior: Returns the removed elements while modifying the original array.
Original Array: Changes after using splice(), as elements are removed or added.

slice() gives you a copy of the array elements without altering the original array.
splice() modifies the original array by removing (or adding) elements based on the specified range.*/

console.log("Default array is : "+ myArr);

let newArr = myArr;
console.log(newArr.slice(1,4));
console.log("slice method array : "+newArr);

//splice() method

let newArr1 = myArr;
console.log(newArr1.splice(1,4));
console.log("splice method array : "+ newArr1);



