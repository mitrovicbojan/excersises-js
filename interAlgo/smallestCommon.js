function smallestCommons(arr) {
  //get min and max
  let smallerNum = Math.min(arr[0], arr[1]);
  let largerNum = Math.max(arr[0], arr[1]);
  console.log(smallerNum);
  console.log(largerNum);

  //range of numbers btw min and max
  const range = [];

  for (let i = smallerNum; i <= largerNum; i++) {
    range.push(i);
  }

  console.log(range);

  const topNum = range.reduce((acc, curr) => acc * curr);

  console.log(topNum);
  return arr;
}

smallestCommons([1, 5]);
