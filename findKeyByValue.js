// Function Implementation

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// given two arguments we need to match that the key found in argument one is matched with arguemnt two
const findKeyByValue = function (object, tvShow){

  // use object.keys to help me search through all the object keys

  // use a for of loop with object.keys 

for (const key of Object.keys(object)) {
  
  // we are comparing the tv shows so object[key] is actually giving you object.key  object.sci_fi which equals the expanse  and that matches up with the tv show 
  if(object[key] === tvShow){
    console.log('the key to' + tvShow + 'is '+ key);
    return key
  }
}

}






// Testing functions
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
