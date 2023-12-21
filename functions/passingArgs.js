"use strict";
const flight = "LH234";
const john = {
  name: "John Smith",
  passport: 12234645745,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 12234645745) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, john);
// console.log(flight);
// console.log(john);

//Higher-Order Functions

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transforemd by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// callbacks
const high5 = function () {
  console.log("5");
};

document.body.addEventListener("click", high5);

["John", "Martha", "Adam"].forEach(high5);

// function returning function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("hey");

// greeterHey("John");
// greeterHey("Steve");

// greet("Hello")("Mark");

//arrow function
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Hello")("Mark");
