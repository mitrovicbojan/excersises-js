// Random integer

let myInt = [];

for (let i = 0; i < 1950; i++) {
  myInt.push(randomInt(0, 100000000));
}
console.log(myInt);
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
