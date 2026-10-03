const user = {
    username : "garvit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to the website!`)
      //  console.log(this)
    }

    }
    // user.welcomeMessage()
    // user.username = "sam"
    // user.welcomeMessage()
    // console.log(this)

// function chai(){
//     let username = "garvit"
//     console.log(this.username)
// }
// chai()




// const chai = function (){
//     let username = "garvit"
//     console.log(this.username)
// }


// chai()
const chai = () =>{
    let username = "garvit"
    console.log(this)
}
chai()