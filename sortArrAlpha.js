//Sort an Array Alphabetically using the sort Method
// use sort()

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(ascendingOrder([1, 5, 2, 3, 4]));

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

console.log(reverseAlpha(["l", "h", "z", "b", "s"])); //['z', 's', 'l', 'h', 'b']

//Return a Sorted Array Without Changing the Original Array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [...arr];
  return newArr.sort(function (a, b) {
    return a - b;
  });
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));

//Split a String into an Array Using the split Method

const otherString = "I-am, Hello";
const byDigits = otherString.split(/\W/);
console.log(byDigits);
