//forEach loop doesn't return anything

const myNum = [1,2,3,4,5,6,7,8,9,19,12,0,-1];

//This function return the value but forEach doesn't return anything 
const store = myNum.filter((num) => {
   return num > 5
})
console.log(store);

//Practice the fillter method 
const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', publisher: 'HarperCollins', year: 1937 },
    { title: '1984', author: 'George Orwell', publisher: 'Secker & Warburg', year: 1949 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publisher: 'Little, Brown and Company', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J.B. Lippincott & Co.', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publisher: 'Scribner', year: 1925 },
    { title: 'Brave New World', author: 'Aldous Huxley', publisher: 'Chatto & Windus', year: 1932 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publisher: 'Allen & Unwin', year: 1954 }
  ];

//   books.forEach((item) => {
//     console.log(`Title : ${item.title} , Author : ${item.author} , Publisher : ${item.publisher} , year : ${item.year}`);
    
//   })
  books.forEach((item) => {
    console.log(item);
    
  })
  
  
  //Here I'm applying some filters 
  const detail  = books.filter( (item) => {
      return item.year === 1925;
    })
    console.log(detail);
    //Change the value of year in the books implicit return 
  const userbooks = books.filter((item) =>  item.year >= 1925 && item.publisher === "Scribner")
   console.log(userbooks);


//Chaning of map function 
const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNumbers
        .map((num) => num*10)
        .map((num) => num+1)
        .filter((num) => num >=30)
        console.log(newNums);
        

//From my side read the difference between forEach , Map , and filter
  