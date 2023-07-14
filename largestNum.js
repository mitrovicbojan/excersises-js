//returns array that has the largest num in it
// function largestOfFour(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Math.max(...newArr) < Math.max(...arr[i])) {
//       newArr = arr[i];
//     }
//   }
//   return console.log(newArr);
// }

// largestOfFour([
//   [4, 9, 1, 3],
//   [13, 35, 18, 26],
//   [32, 35, 97, 39],
//   [1000000, 1001, 857, 1],
// ]);

// function largestOfFour(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let biggestNum = arr[i][0];
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] > biggestNum) {
//         biggestNum = arr[i][k];
//       }
//     }
//     newArr[i] = biggestNum;
//   }
//   return newArr;
// }

// console.log(
//   largestOfFour([
//     [4, 9, 1, 3],
//     [13, 35, 18, 26],
//     [32, 35, 97, 39],
//     [1000000, 1001, 857, 1],
//   ])
// );

// function largestOfFour(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let biggestNum = arr[i][0];
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] > biggestNum) {
//         biggestNum = arr[i][k];
//       }
//     }
//     newArr[i] = biggestNum;
//   }
//   return newArr;
// }

// console.log(
//   largestOfFour([
//     [4, 9, 1, 3],
//     [13, 35, 18, 26],
//     [32, 35, 97, 39],
//     [1000000, 1001, 857, 1],
//   ])
// );
