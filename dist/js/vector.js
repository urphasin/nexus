import * as utils from "./utils.js";
/* .ext .js is very important.*/
console.log("We are vector friends!");
let message = utils.greet("African bird.");
console.log(message);
// vector.ts
export function sayHi() {
    console.log("Hi!");
}
export let x = 42;
export const y = 100;
