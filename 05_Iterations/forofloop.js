// // for of loop

// const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//     console.log(i);
// }

// const great = "Hello World";
// for (const i of great) {
//     console.log(i);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('SA', "South Africa")
map.set('WS', "West Indies")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}