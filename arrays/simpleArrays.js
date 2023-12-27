//Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));

console.log(arr.splice(2));

// CONCAT
let arr2 = [1, 2, 3, 4, 5];
console.log(arr.concat(arr2));

//JOIN
console.log(arr2.join(" - "));

// at method

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//getting the last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

//forEach method

const movemnets = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movemnets) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}

movemnets.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: you withdrew ${Math.abs(movement)}`);
  }
});
