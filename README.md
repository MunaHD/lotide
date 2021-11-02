# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `function (assertArraysEqual)` : asserts whether or not the two given arrays are equal.


*  `function (assertEqual)` : a series of success / failure messages printed to the console, letting us know if our functions are behaving as expected.


*  `function (assertObjectsEqual)` : asserts whether or not the two given objects are equal.


*  `function (countLetters)` : Returns an object that's key: value pair are the letter and the number of times it appears.


*  `function (countOnly)` : Takes a object and list as parameter and returns the number of occurences for each item.


*  `function (eqArrays)` : Tests whether two arrays are the same and returns true or false based on that.


*  `function (eqObjects)` : Tests whether two objects are the same and returns true or false based on that.

*  `function (findKey)` : Takes an object and callaback as parameter and returns the first key that matches.


*  `function (findKeyByValue)` : Takes in object and value as a parameter and return the key that matches.


*  `function (flatten)` : Takes in a nested array and returns a one level version of it with all the elements.


*  `function (head)` : Returns the first element of an array.


*  `function (letterPositions)` : it takes a string and returns an object that gives the letter and index as a key:value pair.


*  `function (map)` : takes an array and callback as paramaters and returns an array that the callback changed.


*  `function (middle)` :return the middle of a given array. if it is even it returns the two center elements.


*  `function (tail)` : takes an array as paramter and returns an array of elements excluding the first element.


*  `function (takeUntil)` : takes an array and callback, and returns alll elements until the condition is met.


*  `function (without)` : given an array and value it return an array without those values.

