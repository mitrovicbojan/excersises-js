// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  for (let i = 0; i <= arr.length; i++) {
    console.log(newArr.push(arr.splice(0, size)));
    if (size >= arr.length && arr.length != 0) {
      newArr.push(arr.splice(0, arr.length));
    }
  }

  console.log(newArr);
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
