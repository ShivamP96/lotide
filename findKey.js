const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};



const findKey  = function(obj, callback){
  let names = Object.keys(obj);
  
  for(const key of names){
   // console.log(obj[key].stars)
    //console.log(callback(key))
   // console.log(key)
  //  console.log(obj[key])
  // console.log(callback(obj[key].stars))
    if(callback(obj[key]) === true) {
      return key
    }
    // if((obj[key].stars) === callback(key)){
    //     return key;
    //  } 
  }
}





console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => {
  console.log(x)
  return x.stars === 2
})) // => "noma"



// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, "noma"))