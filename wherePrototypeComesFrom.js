function Ship(name, size) {
  this.name = name;
  this.price = 12000;
  this.size = size;
}
let oilTanker = new Ship("Tesla", "80m");
console.log(Ship.prototype.isPrototypeOf(oilTanker)); // true

console.log(Object.prototype.isPrototypeOf(Ship.prototype)); //true
