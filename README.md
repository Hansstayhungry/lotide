# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mikastayhungry/lotide`

**Require it:**

`const _ = require('@mikastayhungry/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array))`: return the first element of array
* `tail(array)`: return a middle element or elements depending on the length of array
* `middle(array)`:  return every element of array but the first one
* `countLetters(string)`: return letter occurrence
* `countOnly(array, object)`: return count only for the designated name in object
* `findKey(object, callback)`: return first key of object based on value selected
* `findKeyByValue(object, value)`: return key based on the value within the object
* `flatten(array)`: remove first level of array in an array
* `letterPositions(string).(number)`: return letter positions in a string
* `map(array, callback)`: apply same rules to all elements in an array, and return an new array
* `takeUntil(array, callback)`: apply rules until parameter in callback is out of range, return the new array
* `without(array, array)`: return array that not included specified elements
