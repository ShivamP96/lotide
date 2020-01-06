// Function Implementation

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let end;
  end = array.slice(1);
  return end;

};



const words = [1,2,3,4];
//tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words));
assertEqual(words.length, 4); // original array should still have 3 elements!

console.log(words.length);