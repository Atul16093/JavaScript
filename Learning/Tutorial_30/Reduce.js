//Making the shopping cart using reduce function 

const cart  = [
    {
        product : "Iphone 16 pro max",
        price  : 160000,
    },
    {
        product : "Lenovo Legion Pro 7i Intel Core I9 14th Gen Gaming Laptop",
        price : 350000,
    },
    {
        product : "samsung s24 ultra",
        price : 134000,
    }
]

const total = cart.reduce((acc , item) => acc + item.price , 0 )
console.log(total);
