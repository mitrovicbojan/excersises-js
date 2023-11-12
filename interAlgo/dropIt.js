// Drop It

function dropElements(arr, func) {
  let arrLegth = arr.length;
  for (let i = 0; i < arrLegth; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  console.log(arr);
  return arr;
}

dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
