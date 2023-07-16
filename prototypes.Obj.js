function Ship(name, size) {
  this.name = name;
  this.price = 12000;
  this.size = size;
}
Ship.prototype.color = "green";

let oilTanker = new Ship("Snoopy", "80m");
console.log(oilTanker); //prototype: Object
console.log(oilTanker.color); //green
// oilTanker.color = "blue";
console.log(oilTanker); //Ship {name: 'Snoopy', price: 12000, size: '80m', color: 'blue'}

// loop - own properties - prototype properties

let ownProperties = [];
let prototypeProperties = [];

for (let props in oilTanker) {
  // if (oilTanker.hasOwnProperty(props)) {
  //   ownProperties.push(props);
  // } else {
  //   prototypeProperties.push(props);
  // }
  oilTanker.hasOwnProperty(props)
    ? ownProperties.push(props)
    : prototypeProperties.push(props);
}
console.log(ownProperties);
console.log(prototypeProperties);

//constructor property

console.log(oilTanker.constructor === Ship); //true
console.log(oilTanker instanceof Ship); //true - better to use this one
