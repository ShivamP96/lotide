// Helper functions
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


// return all the indicies (zero-based positions) in the string where each character is found
// return multiple numbers to show the various positions that it shows up
const letterPositions = function(sentence) {
  // created empty object variable
  const results  = {};
  // take sentence and make sure there are no spaces and all lowerCase
  let noSpaces = sentence.split(" ").join("").toLowerCase();

  // make a for of loop that will go though noSpaces and find the index
  // loop will have if statement to check and add to object called result
  let i = 0;
  for (const eachLetter of noSpaces){
    if (results[eachLetter]){
      results[eachLetter].push(i);
    } else {
      results[eachLetter] = [];
      console.log(results[eachLetter]);
      results[eachLetter].push(i);

    }
    i++
  }
  // return the results after the for of loop
  return results;

};


// Test
assertArraysEqual(letterPositions("hello").l, [2,3]);