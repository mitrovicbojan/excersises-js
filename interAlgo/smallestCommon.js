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
  for (let i = largerNum; i < topNum; i += largerNum) {
    const divided = range.every((num) => i % num === 0);
    if (divided) {
      return i;
    }
  }
}

console.log(smallestCommons([2, 10]));
