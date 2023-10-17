//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = (arr) => {
  // Only change code below this line
  let filteredList = arr.filter((prop) => prop > 0 && prop == parseInt(prop));
  let result = filteredList.map((prop) => prop * prop);

  return result;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
