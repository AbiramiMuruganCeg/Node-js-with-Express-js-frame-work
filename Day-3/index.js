/*
const add = require("./math");
console.log("Local Modules");
const total = add(15, 20);
console.log(total);
*/
/*
const math = require("./math");
console.log("Local Modules");
let total = math.add(2, 3);
const difference = math.sub(2, 3);
console.log("total ", total);
console.log("difference ", difference);

total = math.add(16, 3);
console.log("total ", total);
*/

const area = require("./circle");
console.log("Local Module");

let a = area.calculatedArea(2);
console.log("area of circle ", a);
