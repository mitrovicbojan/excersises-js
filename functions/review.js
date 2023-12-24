"use strict";

const carRental = {
  brand: "BMW",
  rentedArr: [],
  rent(numDays, name) {
    console.log(`${name} has rented ${this.brand} for ${numDays} days`);
    this.rentedArr.push({
      car: `${this.brand}`,
      name: `${name}`,
      days: `${numDays}`,
    });
  },
};

carRental.rent(10, "John Smith");
console.log(carRental);

// default parameters

const reservations = [];

const ferryBooking = function (paxNum, ferryName, price) {
  const reservation = {
    paxNum,
    ferryName,
    price,
  };
  console.log(reservation);
  //paxNum: undefined, vehicle: undefined, price: undefined
  reservations.push(reservation);
};
console.log(reservations);
ferryBooking();

//const ferryBooking = function (paxNum = 1, ferryName = "Poseidon", price = 50)

//passing arguments - value vs reference

const ferryBoat = "Poseidon";
const passenger = {
  name: "John Smith",
  passportNum: 5468755467,
};

const boarding = function (ferryBoat, passenge) {
  ferryBoat = "Diogenis"; //new variable
  passenge.name = "Mr " + passenge.name; //manipulate copy of the obj because it is the same in the memeory

  // if (passenge.passportNum === 5468755467) {
  //   alert("Welcome aboard!");
  // } else {
  //   alert("Wrong passport number!");
  // }
};
boarding(ferryBoat, passenger);
console.log(ferryBoat);
console.log(passenger);

const joinStr = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

console.log(joinStr("java script"));

const upperStr = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

console.log(upperStr("hello world"));

//
const transformStr = function (str, func) {
  console.log(`Mutated string: ${func(str)}`);
};

transformStr("hello world", upperStr);
transformStr("hello world", joinStr);

const sayHi = function () {
  console.log(`Hello`);
};

document.body.addEventListener("click", sayHi);

// function returns function

const sayHello = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greet = sayHello("Hello");

greet("Tom");

//one go
sayHello("hi")("Sam");

// call and apply method
