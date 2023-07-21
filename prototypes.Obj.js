function Ship(name, size) {
  this.name = name;
  this.price = 12000;
  this.size = size;
}
Ship.prototype.color = "green";

let oilTanker = new Ship("Tesla", "80m");
let cruiseShip = new Ship("Victoria", "70m");

console.log(oilTanker.color); // output: green
console.log(cruiseShip.color); // output: green
oilTanker.color = "blue";
console.log(oilTanker); //Ship {name: 'Tesla', price: 12000, size: '80m', color: 'blue'}

// loop - own properties - prototype properties

let ownProperties = [];
let prototypeProperties = [];

for (let props in oilTanker) {
  // if (oilTanker.hasOwnProperty(props)) {
  //   ownProperties.push(props);
  // } else {
  //   prototypeProperties.push(props);
  // }
  oilTanker.hasOwnProperty(props)
    ? ownProperties.push(props)
    : prototypeProperties.push(props);
}
console.log(ownProperties);
console.log(prototypeProperties);

//constructor property

console.log(oilTanker.constructor === Ship); //true
console.log(oilTanker instanceof Ship); //true - better to use this one
console.log(Ship.prototype.isPrototypeOf(oilTanker)); //true
//Change the Prototype to a New Object
// add more than one properties to pototype

Ship.prototype = {
  constructor: Ship, //always add constructor
  flag: function () {
    return "Greece";
  },
  crewNum: function () {
    return 500;
  },
};

console.log(Ship.prototype.flag()); //Greece

console.log(Ship.prototype.isPrototypeOf(oilTanker)); //false
console.log(Object.prototype.isPrototypeOf(Ship)); //true - always returns true?
