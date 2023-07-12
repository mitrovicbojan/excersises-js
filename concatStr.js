// concatStr

let myInt = [];

let myNewArr = myInt.join(" ");
console.log(myNewArr);

let simpleArr = ["hello", "hi", "goodmorning"];
let newSimpleArr = [];
for (let i = 0; i < simpleArr.length; i++) {
  newSimpleArr.push(simpleArr[i] + " World");
}
console.log(newSimpleArr);
