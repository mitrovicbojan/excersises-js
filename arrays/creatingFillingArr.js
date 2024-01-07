const x = new Array(7);

console.log(x); //empty

x.fill(1); //only can use this method
//fill(value, start paramether, end paramether)

console.log(x);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);
