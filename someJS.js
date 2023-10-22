//Use the some Method to Check that Any Elements in an Array Meet a Criteria

//The some method works with arrays to check if any element passes a particular test.
//It returns a Boolean value - true if any of the values meet the criteria, false if not.

const numbers = [10, 50, 8, 220, 110, 11];

let num = numbers.some(function (currentValue) {
  return currentValue < 10;
});

console.log(num);

function checkPositive(arr) {
  // Only change code below this line
  let myArr = arr;

  let positiveNum = myArr.some(function (val) {
    return val > 0;
  });
  return positiveNum;
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
