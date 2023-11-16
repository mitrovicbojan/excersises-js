// Steamroller
// function steamrollArray(arr) {
//   let myRec = steamrollArray();
//   console.log(myRec);
//   //   for (let i in myRec) {
//   //     if (myRec[i] !== undefined) {
//   //       console.log(myRec[i]);
//   //     }
//   //   }
//   //   return arr;
// }

const steamrollArray = (arr) => {
  let newArr = [];
  console.log(arr);
  for (let i in arr) {
    for (let k in arr[i]) {
      if (arr[k] !== undefined) {
        newArr.push(arr[i][k]);
      }
    }
  }

  //   if (steamrollArray(arr) !== undefined) {
  //     newArr.push(steamrollArray(arr));
  //   } else {
  //     console.log("shit");
  //   }
  console.log(newArr);
};

steamrollArray([1, [2], [3, [[4]]]]);

// Recursions - common usage

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

function steamroll(arr) {
  let newSteamArr = [];
  recursionArr(0, arr, newSteamArr);
  return newSteamArr;
}

function recursionArr(inx, arr, newSteamArr) {
  if (inx >= arr.length) {
    return;
  }

  if (Array.isArray(arr[inx])) {
    recursionArr(0, arr[inx], newSteamArr);
  } else {
    newSteamArr.push(arr[inx]);
  }

  recursionArr(inx + 1, arr, newSteamArr);
}

// steamroll([1, [2], [3, [[4]]]])
console.log(steamroll([[["a"]], [["b"]]]));
