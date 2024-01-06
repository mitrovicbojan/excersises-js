const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// flat() remove nested arrays
// goes only one lvl
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//set lvl to 2
console.log(arrDeep.flat(2));
