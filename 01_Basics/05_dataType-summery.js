// 1. Premitive data 7 types
    // String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language.


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let useEmail;
console.log(outsideTemp);
console.log(typeof outsideTemp);
console.log(useEmail);
console.log(typeof useEmail);

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 12345678991n;
console.log(typeof bigNumber);


// 2. Reference (Non premitive)
    //Arrays, Objects, Functions

const Names = ["Amit", "Ajay", "Shubham"];
console.log(Names);

let myObj = {
    name: "lalan",
    age: 21,
}
console.log(myObj);

const myFuntion = function() {
    console.log("Hello World");
}
myFuntion();
