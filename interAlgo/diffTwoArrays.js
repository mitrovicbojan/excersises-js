//Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

let firstArr = [1, 2, 3, 5];
let secondArr = [1, 2, 3, 4, 5];
let myArr = [];
let newArr = [];
let countLoop = 0;
for (let i in secondArr) {
  if (firstArr.includes(secondArr[i])) {
    console.log(secondArr[i]);
  } else {
    newArr.push(secondArr[i]);
  }
}
console.log(newArr);