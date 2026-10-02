let score = "33abc"


console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log( valueInNumber)


// NaN -> not a number ( type is number only )
// "33" -> 33
// "33abc" -> Nan
// true -> 1 ; false -> 0

let isLoggedIN = "garvit"

let booleanIsLoggedIn = Boolean(isLoggedIN)
console.log(booleanIsLoggedIn)


// 1 -> true ; 0 -> false
// " empty string " -> false 
// "garvit" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(  stringNumber)
console.log( typeof stringNumber)

console.log("*******************************************Operations***********************************************")

let value = 3 
let negValue = -value
console.log(value)
console.log(negValue)

let str1 = "hello"
let str2 = " garvit"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)
// console.log(true+)    X

let gameCounter = 100
++gameCounter
console.log(gameCounter);
gameCounter++
console.log(gameCounter)





