// Arrays part 2

const mr_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// mr_heros.push(dc_heros);
// console.log(mr_heros);

// const all_heros = mr_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...mr_heros, ...dc_heros];
// console.log(all_new_heros);

// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
// const newArr = arr.flat(Infinity);
// console.log(newArr);

console.log(Array.isArray("lalan"));
console.log(Array.from("lalan"));
console.log(Array.from({name: "lalan"}));  // intersting []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
