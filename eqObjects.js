const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (array1, array2){

  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Same number of keys and the value for each key is the same as the other object
  let sameNumOfKeys = false;
  
  // using an if statemnt to check if the two objects have the same number of keys 
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
    sameNumOfKeys = true;
    //console.log((Object.keys(object1).length === Object.keys(object2).length), "Both objects have the same length ");

      for (const key of Object.keys(object2)){

        if (Array.isArray(object1[key])){
          return eqArrays(object1[key], object2[key]);
        }

        else if(object1[key] !== object2[key]){
        return false;
     }
    } 
    return true;
  //} 
 // return false;
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false

// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};


// eqObjects(ab, ba) // => true

// const abc = {a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab,ba),true);
// assertEqual(eqObjects(ab,abc),false);

// assertEqual(eqObjects(ba,ab),true);



