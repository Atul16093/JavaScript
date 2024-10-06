// callback function doesn't have name 

const coding = ["js" , "java" , "ruby" , "swift" , "python"];

//it's a foreach loop 
// coding.forEach(function (item){
//     console.log(item);
    
// })
//Another way to declare the function inside the foreach loop that's called arrow function
// coding.forEach( (item)=> {
//     console.log(item);
// })

//giving fuction reference inside the forEach loop , we are not execute the function 

function printSth(item){
     console.log(item);
     
}
coding.forEach(printSth);

//another way 
coding.forEach((item , index , arr)=>{
    console.log(item , index , arr);
})

const mycode = [
    {
        language : "java",
        Application : "Facebook",
    },
    {
        Embrace : "To feel shy",
        secreat : "Spill the beans",
    },
    {
        language : "python",
        Application : 'ChatGPT'
    }
]

mycode.forEach((item) => {
    console.log(item.language);
})