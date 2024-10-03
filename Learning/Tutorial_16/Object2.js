/* Singleton Object 
when the object define by new keyword or the help of constructor that object 
called single ton object in javaScript  */

const tinderUser = new Object();   //Singleton object 


//This is a way to adding the value into the singleton object 
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.email = "samarora122@gmail.com";
tinderUser.phoneNo = "45593953945";
tinderUser.age = 24;
console.log(tinderUser);

//Nested object defining way : 
const regularUser = {
    email : "Jack@gmail.com",
    fullName : {
        name : "jack",
        lastName : "king",
             age : {
                ageOfJack : 27,
                }
    }
}
//accesing the value from the nested object 
    console.log(regularUser.fullName.lastName);  
/*Optional chaning => ?  < this means if the value exist so do the next operation 
on the value */
     console.log(regularUser.fullName?.age.ageOfJack);

//Merging the two object 
const obj1 = {name : "Atul" , lastName : "Raghuwanshi"}
const obj2 = {age : 21 , Hobby : "Online gaming"}

// const obj3 = { obj1 , obj2}; //Merging two object inide the new one.
// console.log(obj3);

/*Object.assign is a static method, which is inside the Object class
 const returnedTarget = Object. assign (target{}, source) ;
 Object.assign() , it means we are putting multiple object into the single object.
*/
const obj4 = Object.assign({},obj1 , obj2);
/*if we donn't use carly bracket so it will put other object inside the object one , 
like this const obj4 = Object.assign(obj1 , obj2);  */
// console.log(obj1);

console.log(obj4);

/*
we use this way 90 perecent of time that is use in below 
In this way firstly we spread the value then combine it 
 */
const obj5 = {...obj1 , ...obj2};
console.log(obj5);

//Here We are defining an object inside the array
const arr = [
    {name : "Oggy" ,
         email : "oggy123@gmail.com"
    },
    {
        Joy : "smart",
        Deep : "famished",
    },
]
// accesing the value 
console.log(arr[1].Joy);
//for getting the keys 
console.log(Object.keys(tinderUser));
//for getting the value 
console.log(Object.values(tinderUser));
//for seeing all the entries 
console.log(Object.entries(tinderUser));

//Is any object have particular property or not 
console.log(tinderUser.hasOwnProperty('name'));