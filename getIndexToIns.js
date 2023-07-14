function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  let numIndex = arr.indexOf(num);
  return numIndex;
}

getIndexToIns([40, 60], 50);

let myIndexArr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(myIndexArr.lastIndexOf(3));
console.log(myIndexArr.indexOf(3));

let myIndexCol = [];

for (let i = 0; i < myIndexArr.length; i++) {
  myIndexCol.push(myIndexArr.indexOf(3));
}

console.log(myIndexCol);
console.log(myIndexArr.indexOf(3));
