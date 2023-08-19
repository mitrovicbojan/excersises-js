//Extract Matches

//To use the .match() method, apply the method on a string
//and pass in the regex inside the parentheses.

let newStr = "Left Hand Black";
let testRegEx = /Black/;

let myoutput = newStr.match(testRegEx);

console.log(myoutput); //['Black']

//Find More Than the First Match

let repStr = "Go, Go, Go";
let repRegex = /Go/gi; //use 'i' for case sensetive
let repResult = repStr.match(repRegex);
console.log(repResult); //['Go', 'Go', 'Go']

//Match Anything with Wildcard Period

// For example, if you wanted to match hug, huh, hut, and hum,
//you can use the regex /hu./ to match all four words.

let humStr = "i'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;

console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

//Match Single Character with Multiple Possibilities

let dogStr = "dog";
let digStr = "dig";
let dugStr = "dug";
let dgRegex = /d[oi]g/;

console.log(dogStr.match(dgRegex)); //dog
console.log(digStr.match(dgRegex)); //dig
console.log(dugStr.match(dgRegex)); //null - no 'u' in regex

//Match Letters of the Alphabet

let catStr = "cat";
let hatStr = "hat";
let batStr = "bat";
let atRegex = /[a-e]at/i;

console.log(catStr.match(atRegex));
console.log(hatStr.match(atRegex));
console.log(batStr.match(atRegex));
