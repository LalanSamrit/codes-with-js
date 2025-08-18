const userEmail = "tcs@gmail.com";

if(userEmail) {
    console.log("Got user email");   
} else {
    console.log("Don't have user email");
}

/// falsy values
 /// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/// truthy values
 /// true, "0", 'false', " ", [], {}, function(){}

/// false == 0  --> true
/// false == ''  --> true
/// 0 == ''  --> true


const user = [];

if (user.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefinded

let val1;
val1 = 5 ?? 10
val1 = null ?? 8
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator
   // conndition ? true : false;

  const x = 5 > 3 ? "greater" : "smaller";
console.log(x); 
