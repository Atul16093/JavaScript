/* De-structure an object value  
if we want to use any object value multiple time , so we can use this way too
 in place of by accessing the value like this obj.keyName*/

 const obj = {
     "serial no" : 1 , 
      name : "jayesh",
      class1 : "Batch10",
}
//That's a way to destructure the object 
const {class1} = obj;
// Now we can write Directly class1 in place of obj.class1
console.log(class1);

/* In react how to de-structured the object 
 not focus on this currently */
// const navbar = ({company}) => {
    
// }
// navbar(company = "hitesh");
