//Use the some Method to Check that Any Elements in an Array Meet a Criteria

//The some method works with arrays to check if any element passes a particular test.
//It returns a Boolean value - true if any of the values meet the criteria, false if not.

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function (currentValue) {
  return currentValue < 10;
});
