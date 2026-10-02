// Primitive data types  

// 7 categories  : String , Number , Boolean , null , underfined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemperature = null 
let userEmail; // by default undefined

const id = Symbol('123') // generates unique id everytime 
const anotherId = Symbol('123')

console.log(id == anotherId) // check

const bigNumber = 3456434543565n  // way of declaring bigInt


// Reference (Non Primitive) data types

// Arrays , objects , Functions

const heroes = ["shaktiman" , "naagraj" , "doga"]

let myObj =
{
    name:"garvit",
    age: 22,
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof anotherId);


console.log("*****************Memory********************")

// stack (primitive) memory , heap(non-primitive) memory

let myYoutubename = "garvitmittaldotcom"

let anothername = myYoutubename
anothername = "chai aur code"


console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="garvit@google.com"

console.log(userOne.email);
console.log(userTwo.email);

