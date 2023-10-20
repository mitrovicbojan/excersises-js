//Use the every Method to Check that Every Element in an Array Meets a Criteria

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function (currentValue) {
  return currentValue < 10;
});
