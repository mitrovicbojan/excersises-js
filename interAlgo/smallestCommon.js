function smallestCommons(arr) {
  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  console.log(range);

  return arr;
}

smallestCommons([1, 5]);
