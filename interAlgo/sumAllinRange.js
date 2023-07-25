//Sum All Numbers in a Range

function sumAll(arr) {
  let firstInRange = 0;
  let lastInRange = 0;
  if (arr[0] > arr[arr.length - 1]) {
    lastInRange += arr[0];
    firstInRange += arr[arr.length - 1];
  } else {
    firstInRange = arr[0];
    lastInRange = arr[arr.length - 1];
  }
  console.log(firstInRange);
  console.log(lastInRange);
}

sumAll([16, 10]);
