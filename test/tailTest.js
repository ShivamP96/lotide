const tail = require("../tail");
const assertEqual = require("../assertEqual");



const words = [1,2,3,4];
console.log(tail(words));
assertEqual(tail(words).length, 3); // original array should still have 3 elements!