// call and apply methods

const lufthans = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthans.book(239, "John Smith");
lufthans.book(654, "Mark Thomson");
console.log(lufthans);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthans.book;
//doesnt work
// book(23, "Sarah Johns");

// call method
book.call(eurowings, 23, "Sarah Thomson");
console.log(eurowings);

book.call(lufthans, 56, "Mark Johnson");

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "SA",
  bookings: [],
};

book.call(swiss, 852, "Mary Cooper");
console.log(swiss);

//apply - same as call method but takes array - not used anymore

const flightData = [4567, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

//modern
book.call(swiss, ...flightData);
