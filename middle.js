
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')


const middle = function (array){
let output = [];
let middle = Math.floor(array.length/2);
if (array.length === 1 || array.length === 2){
  return output;

} else if (array.length % 2 === 1){
    output.push(array[middle]);  

} else if (array.length % 2 === 0){
   output.push(array[middle -1]);
   output.push(array[middle]);
} 
return output;

}

// assertArraysEqual(middle([1]),[]) // => []
// assertArraysEqual(middle([1, 2]),[]) // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]

module.exports = middle;
