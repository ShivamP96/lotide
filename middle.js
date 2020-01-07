const eqArrays = function (array1, array2){

  if (array1.length !== array2.length) {
    return false;
  } 
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function (actual, expected){

  if (eqArrays(actual, expected)) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function (array){
let output = [];
let middle = Math.floor(array.length/2);
if (array.length === 1 || array.length === 2){
  return output;

} else if (array.length % 2 === 1){
    output.push(array[middle]);  

} else if (array.length %2 === 0){
   output.push(array[middle -1]);
   output.push(array[middle]);
} 
return output;

}

assertArraysEqual(middle([1]),[]) // => []
assertArraysEqual(middle([1, 2]),[]) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]