//finders keepers

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return (num = arr[i]);
    } else {
      num = undefined;
    }
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
