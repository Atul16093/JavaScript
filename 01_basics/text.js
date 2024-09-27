const accountId = 14432;
let accountEmail = "atul@gmail.com";
var accountPassword = "12431*&^%$&erfj4";
accountCity = "Indore";
accountState = "MP";
// accountId = 1232; //We cann't change the value of constant
/*
If we defining sth like this :
let accountHOlder; 
so the default value of this is undefined 
*/
accountEmail = "change@gmail.com";
accountPassword = "1232*&#435";
accountCity = "Nagpur";
accountState = "Maharastra";

console.log(accountPassword);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
