function findLongestWordLength(str) {
  const newStrArr = str.split(" "); //use .split() method to return array of strings
  let longestStr = "";
  for (let i = 0; i < newStrArr.length; i++) {
    if (newStrArr[i].length > longestStr.length) {
      longestStr = newStrArr[i];
    }
  }
  return longestStr.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// function findLongestWordLength(str) {
//     const newStrArr = str.split(" ");

//     let longestStr = newStrArr[0];
//     for (let i = 1; i < newStrArr.length; i++) {
//       if (newStrArr[i].length > longestStr.length) {
//             longestStr = newStrArr[i];
//     }
//    }
//    return longestStr.length;
//   }

//   findLongestWordLength("The quick brown fox jumped over the lazy dog");
