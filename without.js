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

//assertArraysEqual([1, 2, 3], [1, 2, 3]);


const without = function (source, itemsToRemove){
  let newArray = [];

  for(let i = 0; i < source.length; i++){
    let shouldWePush = true;
    for (let j = 0; j < itemsToRemove.length; j++){

      if (source[i] === itemsToRemove[j]){

        shouldWePush = false;
  
      } 
    }

    if(shouldWePush) {
      newArray.push(source[i]);
    }

    
  }
  return newArray;
}

console.log(without([1, 2, 3,4,5,6,7], [1,2,6, 5])) // => [2, 3]

assertArraysEqual(without([1, 2, 3,4,5,6,7], [1,2,6, 5],4),[3,4 ,7])
