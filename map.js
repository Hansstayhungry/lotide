const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["ground", "control", "to", "major", "tom", "David"];
const words3 = ["Bowie", "ground", "control", "to", "major", "tom"];

const map = function(array , callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const assertArraysEqual = require('./assertArraysEqual');

// TEST CODE
assertArraysEqual(map(words1, word => word[0]), [1, 2, 3]);
assertArraysEqual(map(words2, word => word[0]), ["g", "c", "t", "m", "t", "D" ]);
assertArraysEqual(map(words3, word => word[0]), ["b", "g", "c", "t", "m", "t", "D" ]);
