//Use a Mixin to Add Common Behavior Between Unrelated Objects

let paintMixin = function (obj) {
  obj.paint = function () {
    return "white";
  };
};

let house = {
  street: "1st street",
  squareMeters: 100,
};

let car = {
  brand: "WASD",
  model: 456,
};
paintMixin(house);
paintMixin(car);

console.log(house.paint());
console.log(car.paint());
