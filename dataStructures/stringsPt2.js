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

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceUS);

const announcement =
  "All passengers come to boarding door 12. Boarding door 23.";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

//regex
console.log(announcement.replace(/door/g, "gate"));

// Booleans

const newPlane = "Airbus A320neo";
console.log(newPlane.includes("A320"));
console.log(newPlane.includes("XX"));
console.log(newPlane.startsWith("Airb"));

if (newPlane.startsWith("Airbus") && newPlane.endsWith("neo")) {
  console.log("Part of the new airbus family");
}

//practice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed to board");
  } else {
    console.log("Welcome aboard");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");

checkBaggage("Socks and camera");

checkBaggage("Got some snacks and a gun for protection");
