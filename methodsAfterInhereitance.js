//Add Methods After Inheritance

function House() {}

House.prototype.street = function () {
  return "1st street";
};

function ParentsHouse() {}
ParentsHouse.prototype = Object.create(House.prototype);
ParentsHouse.prototype.constructor = ParentsHouse;

ParentsHouse.prototype.garden = function () {
  return "Yes";
};

//override method
ParentsHouse.prototype.street = function () {
  return "2nd street";
};
console.log(ParentsHouse.prototype.street()); //2nd street

let myHouse = new ParentsHouse();

console.log(myHouse.garden());
console.log(myHouse.street()); //2nd street
