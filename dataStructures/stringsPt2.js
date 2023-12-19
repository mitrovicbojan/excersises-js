const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//comparing emails

const email = "hello@gmail.com";
const loginEmail = " Hello@Gmail.Com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//replacing
