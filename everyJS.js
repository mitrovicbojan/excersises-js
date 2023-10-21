//Use the every Method to Check that Every Element in an Array Meets a Criteria

//The every method works with arrays to check if every element passes a particular test
//It returns a Boolean value - true if all values meet the criteria, false if not.
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function (currentValue) {
  return currentValue < 10;
});

function checkPositive(arr) {
  // Only change code below this line
  let isPositive = (val) => val >= 0;

  return arr.every(isPositive);
}

checkPositive([1, 2, 3, -4, 5]);
