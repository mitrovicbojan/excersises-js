//Use Closure to Protect Properties Within an Object from Being Modified Externally

function House() {
  let color = "white";
  this.getHouseColor = function () {
    return color;
  };
}

let apartment = new House();

console.log(appartment.getHouseColor());
