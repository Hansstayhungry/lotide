
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  } else {
    console.log(`Assertation Passed: ${arr1} === ${arr2}`)
  }
}

module.exports = assertArraysEqual;
