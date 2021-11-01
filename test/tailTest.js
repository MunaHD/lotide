
const tail = require("../tail") //two dots because the file is not in this folder
const assertEqual = require("../assertEqual")


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const word = ["Lighthouse", "Labs"];
tail(word); // no need to capture the return value since we are not checking it
assertEqual(word.length, 3); // original array should still have 3 elements!