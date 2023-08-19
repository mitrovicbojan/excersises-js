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
