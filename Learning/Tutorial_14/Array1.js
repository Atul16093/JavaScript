
// Uses of Array methods 
let marvel_Hero = ["Iron man" , "Thor" , "Spider Man" , "Hulk"];
let dc_Hero = ["Bat-man" , "Superman","flash"];

// In JavaScript, arrays can hold any type of data, including other arrays. When using the push() method, if you push another array into an existing array, it treats the entire second array as a single element and adds it to the next available index.

// marvel_Hero.push(dc_Hero);

// console.log(marvel_Hero);
// console.log(marvel_Hero[4][2]);

// concat method use for Combines two or more arrays. This method returns a new array without modifying any existing arrays.

let all_Heroes = marvel_Hero.concat(dc_Hero);
console.log(all_Heroes);



/*The spread operator (...) can be used to combine two arrays by spreading all the elements of one array into a new array. This method works similarly to the concat() method but is more concise. It takes the elements of each array, breaks them down, and stores them individually in the new array.*/

console.log("Spreading an two array i.e glass tumbler ")
let all_new_heroes = [...marvel_Hero , ...dc_Hero];
console.log(all_new_heroes);

/*To convert an nested array into an single array  */
let newArr = [1,2,3,4,[8,76,5],[4,7,[2,3,4]],2,3,4];
let newArr1 = newArr.flat(2);
console.log(newArr1);

//isArray() function help us to give the answer for any name of array exist or not 

console.log(Array.isArray("Atul"));

// from() function convert our data into the array 
console.log(Array.from("Atul"));

console.log(Array.from({name : "hitesh"})); //interesting 

// creating an array by the help of variable 
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2, score3));



