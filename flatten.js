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



const flatten = function(array) {
  let flattenedArray = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}


console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]