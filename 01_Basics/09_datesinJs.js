//Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDateAndTime = new Date(2023, 0, 23, 5, 3, 59);
console.log(myCreatedDateAndTime);
console.log(myCreatedDateAndTime.toLocaleString());

let dates = new Date("05-15-2024")   //MM-DD-YYYY
console.log(dates.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());

let formattedDate = newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'Asia/Kolkata'
});

console.log(formattedDate);
