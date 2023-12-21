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
