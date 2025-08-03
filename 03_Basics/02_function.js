function calculateCartPrice(...num1) {   //reset opreator
    return num1
}
console.log(calculateCartPrice(2, 4, 6));

const user = {
    username: "lalan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)

handleObject( {
    username: "sam",
    price: 399
})
handleObject


const myArr = [2, 4, 6, 8]

function returnSecondValue(getArray) {
    return getArray[0]
}
console.log(returnSecondValue(myArr));
