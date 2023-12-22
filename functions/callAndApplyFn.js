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

// the bind method
//returns new function

const bookEW = book.bind(eurowings);
bookEW(555, "Steven Williams");
const bookSW = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jeff Lebowski");

// with event listeners

lufthans.planes = 300;
lufthans.buyPlane = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};
// lufthans.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthans.buyPlane.bind(lufthans));

// partial application
//order of the args is important
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//same as
//const addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));

//challenge

const rtnFn =
  (rate = 0.23) =>
  (value) =>
    console.log(value + value * rate);

const newTax = rtnFn();
newTax(100);
