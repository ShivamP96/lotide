// Function Implementation

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(` ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(` 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(34,1);
// assertEqual("hello", "hello");


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifiying what to count

const countOnly = function(allItems, itemsToCount){
  const results = {}; // New empty object
  
  // Looping over allItems
  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]){
      console.log(itemsToCount[item]);
      if (results[item]) {
        results[item] +=1;
        console.log(results[item])

      } else {
        results[item] = 1;
        console.log(results[item])

      }
    }
  }
  console.log(results);
  return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
