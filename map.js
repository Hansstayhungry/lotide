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



//const results1 = map(words, word => word[0]);
// console.log(results1);




const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  } else {
    console.log(`Assertation Passed: ${arr1} === ${arr2}`)
  }
}
// TEST CODE
assertArraysEqual(map(words1, word => word[0]), [1, 2, 3]);
assertArraysEqual(map(words2, word => word[0]), ["g", "c", "t", "m", "t", "D" ]);
assertArraysEqual(map(words3, word => word[0]), ["b", "g", "c", "t", "m", "t", "D" ]);
