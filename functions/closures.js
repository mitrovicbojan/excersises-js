//Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
// for (let i = 0; i <= 5; i++) {
//   booker();
// }

//don't need to return function in order to create closures

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
//re-assigned f function
h();
f();

// example 2

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  //executed independetly from boardPassenger function
  setTimeout(function () {
    console.log(`we are now boarding ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassenger(180, 3);
