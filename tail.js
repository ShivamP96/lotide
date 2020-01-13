// Function Implementation

const assertEqual = require('./assertEqual');

const tail = function(array) {
  let end;
  end = array.slice(1);
  return end;

};



// const words = [1,2,3,4];
// console.log(tail(words));
// assertEqual(tail(words).length, 3); // original array should still have 3 elements!

//console.log(words.length);

module.exports = tail;