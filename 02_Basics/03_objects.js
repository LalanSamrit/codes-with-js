const mySym = Symbol("key1");

const jsUser = {
    name: "lalan",
    "full name": "lalan samrit",
    aage: 21,
    [mySym]: "mykey1",
    location: "Nagpur",
    email: "lalansamrit4@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    
    greeting: function() {
        return "Hello JS users";
    },
    greeting2: function() {
        return `Hello JS user, ${this.name}`;
    }
};

jsUser.email = "lalansamrit@abs.ac.in";
Object.freeze(jsUser);
jsUser.email = "lalansamrit@tip.ac.in";

console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


console.log(jsUser.greeting());
console.log(jsUser.greeting2());
