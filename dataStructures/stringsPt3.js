"use strict";

console.log("a+very+nice+string".split("+"));

const [firstName, lastName] = "Bojan Mitrovic".split(" ");
console.log(firstName);
console.log(lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");

  const nameUpperArr = [];
  for (const n of names) {
    nameUpperArr.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpperArr.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("bojan mitrovic");

// Padding

const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  //converting number to a string
  //when one operands is a string it will convert the other values to str
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(45646542189756456));
console.log(maskCreditCard("8753216846454564654654"));

// Repeat

const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const plancesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"⚽️".repeat(n)}`);
};
plancesInLine(5);
plancesInLine(3);
plancesInLine(12);
