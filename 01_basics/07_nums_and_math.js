const score = 400 
console.log(score)

const balance = new Number(100)
// const balance = 100
console.log(balance);

console.log(balance.toString())
// console.log(typeof(balance))
console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherNumber = 123.834697

console.log(otherNumber.toPrecision(4)); // the value under the bracket gives the numebr of digits in the OUTPUT

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // as per US standards
console.log(hundreds.toLocaleString('en-IN')) // as per Indian standards

console.log("***************************************Maths******************************************************")

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // top value
console.log(Math.floor(4.8)); // lowest value
console.log(Math.min(4,6 , 9 , 1));
console.log(Math.max(4 , 793 , 9 , 32));

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1) // to avoid cases like 0.04874665343

console.log("*********************************************************************************************")

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min )