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


const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]]; 
  } else {
    return [arr[middleIndex]];
  }
}

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])