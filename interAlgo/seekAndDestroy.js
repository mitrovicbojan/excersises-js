// Seek and Destroy

function destroyer(...args) {
  let newArr = [...args[0]];
  let restArr = args.slice(1, args.length);

  let filtered = newArr.filter(function (value) {
    return !restArr.includes(value);
  });
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function destroyer(...args) {
  let newArr = [...args[0]];
  let restArr = args.slice(1, args.length);

  let filtered = newArr.filter((value) => !restArr.includes(value));
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
