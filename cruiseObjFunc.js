function Destination() {
  let tahiti = {
    A: [
      {
        price: 1000,
      },
      {
        availableCabins: 5,
      },
    ],
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
  console.log(cabinsCat.A[i]);
}
