function House() {
  let color = "white";
  this.getHouseColor = function () {
    return color;
  };
}

let apartment = new House();

console.log(apartment.getHouseColor());

function Destination() {
  let tahiti = {
    A: 10,
    B: 5,
    C: 6,
  };
  this.getCabins = function () {
    return tahiti;
  };
}
let cruise = new Destination();

console.log(cruise.getCabins());

let cabinsCat = cruise.getCabins();

for (let i in cabinsCat) {
  console.log(cabinsCat[i]);
}
