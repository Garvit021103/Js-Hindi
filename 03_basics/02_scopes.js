
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner :" , a )
}

// block scope and global scope
console.log(a);
// console.log(b);
console.log(c);

console.log("************************************************************");

function one(){
    const username = "garvit"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "garvit"
    if(username === "garvit"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)
console.log(addone(5))
function addone(num){
    return num +1 ;
}

console.log(addTwo(5));
const addTwo = function(num){
    return num + 2 ;
}

 