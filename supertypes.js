// function Ship() {}

// Ship.prototype = {
//   constructor: Ship,
//   flag: function () {
//     return "Greece";
//   },
// };

// let oilTanker = Object.create(Ship.prototype);
// console.log(oilTanker);

function Watercraft() {}

Watercraft.prototype = {
  constructor: Watercraft,
  color: function () {
    return "White";
  },
};

function Ship(name) {
  this.name = name;
}

Ship.prototype = Object.create(Watercraft.prototype);

console.log(Ship.prototype.color()); // White

let oilTanker = new Ship("Tesla");
Ship.prototype.constructor = Ship;
oilTanker.constructor;

// Override Inherited Methods
Ship.prototype.color = function () {
  return "Green";
};

//Add Methods After Inheritance
Ship.prototype.guests = function () {
  return "Guests onboard!";
};

console.log(oilTanker.constructor);
console.log(oilTanker.color()); // White
console.log(oilTanker instanceof Ship); // true

// let oilTanker = Object.create(Watercraft.prototype);

// let cruiseShip = Object.create(Watercraft.prototype);

// console.log(oilTanker.color()); // White
// console.log(oilTanker instanceof Watercraft); //true

// function House() {}

// House.prototype = {
//   constructor: House,
//   street: function () {
//     return "1st street";
//   },
// };
// console.log(House.prototype.street()); //1st street
// function ParentsHouse() {}
// ParentsHouse.prototype = Object.create(House.prototype);
// console.log(ParentsHouse.prototype.street()); //1st street
// let myHouse = new ParentsHouse();

// console.log(myHouse.street()); //1st street

// //Reset an Inherited Constructor Property
// ParentsHouse.prototype.constructor = ParentsHouse;
// console.log(myHouse.constructor); //ƒ ParentsHouse() {}
