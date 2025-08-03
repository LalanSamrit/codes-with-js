function sayMyName() {
    console.log("L");
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("N"); 
}
sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    
}
addTwoNumbers(1, 2)

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result
    
}

const result = addTwoNumbers(1, 2)
console.log("Result: ", result);


function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("lalan"));