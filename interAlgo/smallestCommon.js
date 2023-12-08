function smallestCommons(arr) {
  // let range = [];
  // for (let i = arr[0]; i <= arr[1]; i++) {
  //   range.push(i);
  // }
  // console.log(range);

  // let output = range.forEach((item) => {
  //   if (item % 2 === 0) {
  //     console.log(item);
  //   }
  // });

  let smallerNum = Math.min(arr[0], arr[1]);
  let largerNum = Math.max(arr[0], arr[1]);
  console.log(smallerNum);
  console.log(largerNum);
  // range??
  // for (let i = largerNum; i <= largerNum; i++) {

  // }
  return arr;
}

smallestCommons([1, 5]);
