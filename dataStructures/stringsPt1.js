// Working with strings - Part 1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const seatLetter = seat.slice(-1);
  if (seatLetter === "B" || seatLetter === "E") {
    console.log("you got the middle seat");
  } else {
    console.log("You got lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
