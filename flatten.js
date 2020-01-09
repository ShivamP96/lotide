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


const flatten = function (array){

  //If its not an array just push
  flattenedArray = [];
  for(let i = 0; i < array.length; i++){

    if (Array.isArray(array[i]) !== true ){

      flattenedArray.push(array[i]);
    } else {
      console.log('is array', array[i]);
      flattenedArray = flattenedArray.concat(array[i]);
    }

  }
  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]


