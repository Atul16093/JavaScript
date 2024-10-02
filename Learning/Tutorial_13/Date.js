/*There are too many methods or ways for declaring the date */
let date = new Date();

//This method give us the date.
console.log(date.getDate());

//This method give us full date in the form of mm/dd/yyyy and also day like this -> Wed Oct 02 2024
console.log(date.toDateString());

//give us full date and time too like this -> 2/10/2024, 2:25:55 pm
console.log(date.toLocaleString());

/*Interview question what is the typeOf date answer is object */
console.log(typeof date);

/* In javaScript month start from 0 */
let myDate = new Date(2023 , 0 , 25);
console.log(myDate.toDateString());

/* In javaScript it's a date time format object declartion  */
let mybirthDate = new Date(2023,0,14);
console.log(mybirthDate.toLocaleDateString());

//For get the current time we use toTimeString method with the date object 
let time = new Date();
console.log(time.toTimeString());

//.now give us the milisecond since 1st jan 1970 to the current time 
let currentDate  = Date.now();
//Here I'm applying my own logic :
/* first 1000 used for converting milisecond to second
    second 60 used for converting second into minute
    third 60 used  for converting minute into hours
    fourth 24 used for converting hours into days 
    fifth one is used for converting day into the year*/
console.log(Math.floor(currentDate/1000/60/60/24/365));

