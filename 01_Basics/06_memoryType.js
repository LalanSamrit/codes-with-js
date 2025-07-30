// Stack memory (use in primitive datatype) 
// stack give you copy of data

let myName = "lalan";

let anotherName = myName;
anotherName = "lalansamrit";

console.log(myName);
console.log(anotherName);


// Heap memory (use in non-primitive datatype)
// Heap give you Reference, changes in original id/data

let userOne = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let userTwo = userOne;
userTwo.email = "user2@gmail.com";

console.log(userOne);
console.log(userTwo);
