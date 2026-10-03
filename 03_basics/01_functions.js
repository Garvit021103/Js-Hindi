
// function sayMyname(){
//     console.log("G");
//     console.log("a");
//     console.log("r");
//     console.log("v");
//     console.log("i");
//     console.log("t");

// }

// sayMyname()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result

    return number1+number2
}

const result = addTwoNumbers(3,4)

// console.log("Result: " , result);

function loginUserMessage(userName = "sam"){
    if(userName === undefined){
        console.log("Please enter a user Name")
        return;
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Garvit"))
// console.log(loginUserMessage("garvit"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))


// objects passed in functions

const user = {
    username : "garvit",
    price : 199
}
function handleobject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)

// arrays passed in functions

const myNewArray = [200,400,100,600]


function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
