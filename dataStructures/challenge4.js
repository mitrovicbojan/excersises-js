///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in 
underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
const text = document.querySelector("textarea").value;
document.body.append(document.createElement("button"));

//another way to get btn
//document.querySelector('button').addEventListener

const btn = document.getElementsByTagName("button");
btn[0].id = "btn";

const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value.split("\n");

  let newArr = [];
  for (let i in text) {
    newArr.push(text[i].toLowerCase().trim().replace("_", " "));
  }

  let upperArr = [];
  for (let k in newArr) {
    let [firstWord, secondWord] = newArr[k].split(" ");
    secondWord = secondWord[0].toUpperCase() + secondWord.slice(1);
    upperArr.push([firstWord, secondWord].join(""));
  }

  for (let [n, el] of upperArr.entries()) {
    console.log(`${el.padEnd(20, " ")}${"✅".repeat(n + 1)}`);
  }
});
