let arr = [1,2,3,4,"hello" , 9];
for(let i of arr){
    //for of loop direct provide us value
    console.log(i);
}
//for accessing the  object inside the array that's a way : 
let arr1 = [{name : "Alice" , age : 24} , {name1 : "Rohan" , age : 54}];
for(let i of arr1 ){
    // we can get every value from the help of "for of loop"
    console.log(Object.values(arr1));
}

/*Map 
The map hold key values pair and remembers the 
original insertion order of the keys
Map objects are collections of key-values pairs key in the map may only occur once;
 it is uniques in the map's collection  */

 const map = new Map();
    map.set("IN" , "india")
    map.set("USA" , "United state of America");
    map.set("Uk" , "United Kingdom");

    console.log(map);
 
    //If we want to seprate value of key and value so we just did destructured the Array 
 for(const [key , value] of map){
    console.log(key ,"-:" , value);
    
 }
//using "for of" on the object,
/*We cann't iterate the object by for of loop 
 */
 const myobj = {
    "game1" : "pubg lite",
    "game2" : "COD",
    "game3" : "BGMI",
 }

// for (const object of myobj) {
//     console.log(object);
    
// }
//The name of this loop is for in loop 
for(const i in myobj){
    console.log(`${i} my favroite games ${myobj[i]}`);
    
}

const array = [1,2,3,{key1 : "Door key" , key2 : "Pass key"}];
for(const i in array){
    console.log(array[i]);
    
}
