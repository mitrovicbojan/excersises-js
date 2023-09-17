// Seek and Destroy

function destroyer(...args) {
  console.log(args);
  let newArr = args.splice(0, 1);
  let restArr = args.splice(0, args.length);
  let firstArr = newArr[0];
  let outPut = [];
  console.log(newArr);
  console.log(firstArr);

  for (let i in firstArr) {
    if ((firstArr[i] = restArr[i])) {
    }
  }
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
