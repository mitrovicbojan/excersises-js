class Cruise {
  constructor(destination, ship) {
    this.destination = destination;
    this.ship = ship;
  }
}

class Ship {
  constructor(name, cabins) {
    this.name = name;
    this.cabins = cabins;
  }
}

class Cabins {
  constructor(category, number, price) {
    this.category = category;
    this.number = number;
    this.price = price;
  }
}
let tahiticabins = [
  new Cabins("A", 5, 1000),
  new Cabins("B", 3, 800),
  new Cabins("C", 2, 500),
];

let tahiti = new Cruise("tahiti", new Ship("Flafica", tahiticabins));

let seychellesCabins = [
  new Cabins("P", 2, 3500),
  new Cabins("A", 1, 2500),
  new Cabins("B", 4, 1000),
];
let seychelles = new Cruise("seychelles", new Ship("Danzig", seychellesCabins));
// console.log(tahiti);
// console.log(seychelles);

let cruisesArr = [tahiti, seychelles];

let section = document.getElementById("destination");
let category = document.getElementById("category");

for (let cruise of cruisesArr) {
  let options = document.createElement("option");
  options.style.textTransform = "Capitalize";
  section.style.textTransform = "Capitalize";

  section.appendChild(options);
  options.append(cruise.destination);
}

window.addEventListener("load", function () {
  console.log(section.value);
  for (let cruise of cruisesArr) {
    if (cruise.destination == section.value) {
      for (let cat of cruise.ship.cabins) {
        let cabinCatOpt = document.createElement("option");
        category.appendChild(cabinCatOpt);
        cabinCatOpt.append(cat.category);
      }
    }
  }
});
section.addEventListener("change", function () {
  for (let cruise of cruisesArr) {
    if (section.value == "seychelles") {
      for (let cat of cruise.ship.cabins) {
        console.log(cat.category);
        let cabinCatOpt = document.createElement("option");
        category.remove(cabinCatOpt);
        category.appendChild(cabinCatOpt);
        cabinCatOpt.append(cat.category);
      }
    }
  }
});
// for (let cruise of cruisesArr) {
//   if (cruise.destination == "tahiti") {
//     for (let cat of cruise.ship.cabins) {
//       console.log(cat.category);
//       let cabinCatOpt = document.createElement("option");
//       category.appendChild(cabinCatOpt);
//       cabinCatOpt.append(cat.category);
//     }
//   }
// }
// console.log(cruisesArr[0].ship.cabins[0].category);
// for (let i of tahiticabins) {
//   let cabinCatOpt = document.createElement("option");
//   category.appendChild(cabinCatOpt);
//   cabinCatOpt.append(i.category);
// }

function myFunction() {
  let newOpt = document.getElementById("destination").value;
  let selectedCabin = document.getElementById("category").value;
  console.log(selectedCabin);
  console.log(newOpt);
}
