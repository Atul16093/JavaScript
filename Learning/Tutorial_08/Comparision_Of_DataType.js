
// That's a normal converstion both side we have number 
// console.log(2 > 1);
// console.log(4 <= 3);
// console.log(2 >= 2);
// console.log(8 == 8);
// console.log(1 >= 0);
// console.log(0 != 8);

/* Always avoid different-different datatype comarision like this type of comaprisions : */
// console.log("2" > 1 );
// console.log("02" > 1 );

/*The reason is that an equality check and comparisons > <
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false. */
console. log(null > 0); //false
console. log(null == 0); //false
console. log(null >= 0); //true


// if you want to check strictly go for this operator (===)

console.log(null === 0); //false


