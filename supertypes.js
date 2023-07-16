function Ship() {}

Ship.prototype = {
  constructor: Ship,
  flag: function () {
    return "Greece";
  },
};

let oilTanker = Object.create(Ship.prototype);
console.log(oilTanker);

function House() {}

House.prototype = {
  constructor: House,
  street: function () {
    return "1st street";
  },
};
console.log(House.prototype.street()); //1st street
function ParentsHouse() {}
ParentsHouse.prototype = Object.create(House.prototype);
console.log(ParentsHouse.prototype.street()); //1st street
let myHouse = new ParentsHouse();

console.log(myHouse.street()); //1st street

//Reset an Inherited Constructor Property
ParentsHouse.prototype.constructor = ParentsHouse;
console.log(myHouse.constructor); //ƒ ParentsHouse() {}
