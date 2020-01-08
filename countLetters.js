// Function Implementation

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Takes in a string and returns a count of each of the letters in that
//  sentence.
// E.g. countLetter('LHL') should return L = 2 and H = 1
const countLetter = function (sentence){
  // Declare a empty object variable that will be returned 
  let result = {};
  // get rid of the spaces in a string
  let noSpaces = sentence.split(" ").join('').toLowerCase();
  //console.log(noSpaces);
  // apply a for of loop to go through each element in a string 
  for (const eachLetter of noSpaces){
    // in the for of loop have a counter that will count everytime a letter 
    //is repeated
    //console.log(eachLetter);
    if (result[eachLetter]){
      result[eachLetter] += 1;
    } else {
      result[eachLetter] = 1;
    }
    // return the results 
   
  }
  //console.log(result);
  return(result)
  
  

}

console.log(countLetter("lighthouse in the house"));