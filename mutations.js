//Mutations

function mutation(arr) {
  let newArr1 = arr[0].toLowerCase().split("");
  let newArr2 = arr[1].toLowerCase().split("");

  for (let i = 0; i < newArr2.length; i++) {
    if (newArr1.indexOf(newArr2[i]) == -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hello"]));
