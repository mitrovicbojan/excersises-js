// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let newArr2 = [...arr2]; //moze i slice da kopira
  for (let i = 0; i < arr1.length; i++) {
    newArr2.splice(n + i, 0, arr1[i]);
  }
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
