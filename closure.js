//Use Closure to Protect Properties Within an Object from Being Modified Externally

function House() {
  let color = "white";
  this.getHouseColor = function () {
    return color;
  };
}

let apartment = new House();
// apartment.color = "black";
apartment.price = 100;
console.log(apartment.color);
console.log(apartment.hasOwnProperty("color"));
console.log(apartment.price);
console.log(apartment.getHouseColor()); //output: white

// not private
function Ship(name, size) {
  this.name = name;
  this.price = 12000;
  this.size = size;
}
// Ship.prototype.color = "green";

let oilTanker = new Ship("Tesla", "80m");

Ship.price = 100;
console.log(Ship.price);
console.log(oilTanker.price);
console.log(Ship);
