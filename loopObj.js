let myObj = {};

let myArr = ["Tom", "Marie", "Stella", "John", "Danzig"];

myObj["name"] = [];
// console.log(myObj.name);

for (let i in myArr) {
  myObj["name"].push(myArr[i]);
  myObj[myArr[i]] = myArr[i];
}
console.log(myObj);
