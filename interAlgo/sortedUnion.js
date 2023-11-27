// Sorted Union

function uniteUnique(...arr) {
  // copy and flat the arr
  let joinArr = [...arr].flat();
  console.log(joinArr);

  //remove duplicates
  let filteredArr = joinArr.filter(
    (value, index) => joinArr.indexOf(value) === index
  );
  return filteredArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
