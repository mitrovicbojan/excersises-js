//Missing letters
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [5, 7];
let res = arr.filter((el) => arr2.includes(el)); //same element included in arr
let res2 = arr.filter((el) => !arr2.includes(el)); //elements that are not the same

arr.indexOf(6);
console.log(res);
