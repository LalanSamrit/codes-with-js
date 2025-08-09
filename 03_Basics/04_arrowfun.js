// const user = {
//     username: "lalan",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to our website`);
//         console.log(this);
        
//     }
// }

// user.welcomeMessage()
// user.username = "sameer"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "lalan"
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//     let username = "lalan"
//     console.log(this.username);
// }
// chai()


const chai = () => {          // Arrow fun
    let username = "lalan"
    console.log(this.username);
    console.log(this);
}
chai()


const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(2,4));

const myArray = [2, 4, 5, 6, 7]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
