//Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  let longerArr = [];
  let shorterArr = [];
  if (arr1.length >= arr2.length) {
    longerArr.push(arr1);
    shorterArr.push(arr2);
  } else {
    longerArr.push(arr2);
    shorterArr.push(arr1);
  }
  console.log(longerArr);
  console.log(shorterArr);
  const newArr = [];
  for (let i in arr1) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

//resenje
function diffArray(arr1, arr2) {
  const newArr = [];

  for (let i in arr1) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i in arr2) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

// let firstArr = [1, 2, 3, 5];
// let secondArr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i in secondArr) {
//   if (!firstArr.includes(secondArr[i])) {
//     newArr.push(secondArr[i]);
//   }
// }
// console.log(newArr);
