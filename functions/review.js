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

//passing arguments
