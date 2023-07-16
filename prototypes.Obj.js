function Ship(name, size) {
  this.name = name;
  this.price = 12000;
  this.size = size;
}
Ship.prototype.price; //no need to assign. if assinged - it will not overwritte

let oilTanker = new Ship("Snoopy", "80m");

console.log(oilTanker);
