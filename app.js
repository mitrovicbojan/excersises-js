// const btn = document.getElementById("btn");
// const card = document.getElementById("container");
// btn.addEventListener("click", function () {
//   card.classList.toggle("inactive");
//   console.log("click");
// });

// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };
// function countOnline(usersObj) {
//   // Only change code below this line
//   let count = 0;
//   for (let user in usersObj) {
//     if (usersObj[user].online === true) {
//       count++;
//     }
//   }
//   return count; // Only change code above this line
// }

// console.log(countOnline(users));

// const students = {
//   John: {
//     "passed the test": true,
//   },
//   Tom: {
//     "passed the test": false,
//   },
//   Ann: {
//     "passed the test": true,
//   },
// };

// function whoPassedTest(studentsObj) {
//   let result = 0;
//   for (let pupil in studentsObj) {
//     if (studentsObj[pupil]["passed the test"] == true) {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(whoPassedTest(students));

// const students = {
//   John: {
//     graduated: true,
//   },
//   Tom: {
//     graduated: false,
//   },
//   Ann: {
//     graduated: true,
//   },
// };

// function studentsGraduated(studentsObj) {
//   let result = 0;
//   for (let student in studentsObj) {
//     if (studentsObj[student].graduated) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(studentsGraduated(students));

// let students = {
//   John: {
//     age: 27,
//     graduated: false,
//   },
//   Tom: {
//     age: 32,
//     graduated: true,
//   },
//   Ann: {
//     age: 22,
//     graduated: false,
//   },
//   Sharon: {
//     age: 19,
//     graduated: false,
//   },
// };

// function arrayOfStudents(obj) {
//   return Object.keys(obj);
// }

// console.log(arrayOfStudents(students));

// let multiArray = [
//   [
//     { id: 456, name: "John" },
//     {
//       valid: true,
//       email: "example@test.com",
//     },
//   ],
//   [
//     {
//       pets: 2,
//       hobbies: false,
//     },
//   ],
// ];

// const grades = {
//   biology: 5,
//   chemistry: 4,
//   mathematics: 3,
// };
// grades.biology = 4; //changed the value
// grades["biology"] = 4; //changed the value

// grades.history = 3; // add new key-value pair
// grades["history"] = 3; // add new key-value pair

// grades["english grammar"] = 3;

// function reverseString(str) {
//   let revStr = "";
//   for (let i = 0; i <= str.length - 1; i++) {
//     revStr = str[i] + revStr;
//   }
//   return revStr;
// }

// console.log(reverseString("hello"));
// function factorialize(num) {
//   let newNum = 1;
//   for (let i = 1; i <= num; i++) {
//     newNum = newNum * i;
//   }
//   return newNum;
// }

// console.log(factorialize(5));

// function findLongestWordLength(str) {
//   const newStrArr = str.split(" "); //use .split() method to return array of strings
//   let longestStr = "";
//   for (let i = 0; i < newStrArr.length; i++) {
//     if (newStrArr[i].length > longestStr.length) {
//       longestStr = newStrArr[i];
//     }
//   }
//   return longestStr.length;
// }

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

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

// let myStr = "Bostonian";
// for (let i = myStr.length - 5; i < myStr.length; i++) {
//   let myNewStr = myStr[i];
//   if ((myNewStr = "onian")) {
//     console.log("ovo je tacno");
//   } else {
//     console.log("ovo nije tacno");
//   }
// }

// function confirmEnding(str, target) {
//   let targetLength = target.length;
//   let strLength = str.length;

//   let setIndex = strLength - targetLength;
//   let newStr = "";
//   for (let i = setIndex; i < str.length; i++) {
//     newStr += str[i];
//   }
//   if (newStr == target) {
//     return (str = true);
//   } else {
//     return (str = false);
//   }
// }

// console.log(confirmEnding("He has to give me a new name", "name"));

// let myStr = "abc";

// let str = "abc";
// let duzina = str.length * str.length;
// console.log(str);
// for (let i = 0; i < duzina; i++) {
//   str += str[i];
//   if (duzina < 0) {
//     str = "";
//   }
// }
// console.log(str);

// function repeatStringNumTimes(str, num) {
//   if (num <= 0) {
//     return (str = "");
//   }
//   let copyofStr = "";
//   for (let i = 0; i < num; i++) {
//     copyofStr += str;
//   }

//   return copyofStr;
// }

// console.log(repeatStringNumTimes("abC", 1));

//truncate string

// let mystr = "i-";
// console.log(mystr.length);
// let mynewstr = "";
// for (let i = 0; i < 1; i++) {
//   console.log((mynewstr = mynewstr + mystr[i]));
// }
// console.log(mynewstr + "...");

// function truncateString(str, num) {
//   if (num >= str.length) {
//     return str;
//   }
//   let myNewStr = "";
//   for (let i = 0; i < num; i++) {
//     myNewStr += str[i];
//   }
//   return myNewStr + "...";
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 2));

//finders keepers

// function findElement(arr, func) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return (num = arr[i]);
//     } else {
//       num = undefined;
//     }
//   }
//   return num;
// }

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

//Boo who

// function booWho(bool) {
//   return bool === true || bool === false ? true : false;
//   // if (bool === true || bool === false) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// }

// console.log(booWho(1));

//Title Case a Sentence

// function titleCase(str) {
//   let myStr = str.toLowerCase();
//   let newArr = str.split(" ");
//   let upperArr = [];
//   for (let i = 0; i < newArr.length; i++) {
//     upperArr = upperArr + newArr[i][0].toUpperCase();
//   }
//   console.log(upperArr);
//   console.log(newArr);
//   return str;
// }

// titleCase("I'm a little tea pot");

// function titleCase(str) {
//     let myStr = str.toLowerCase();
//     let newArr = myStr.split(" ");

//     for (let i = 0; i < newArr.length; i++ ) {
//       newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1)
//     }
//     console.log(newArr);
//     return newArr.join(" ");
//   }

//   titleCase("I'm a little tea pot");

// function bouncer(arr) {
//   let mynewarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] != false &&
//       arr[i] !== "" &&
//       arr[i] !== undefined &&
//       arr[i] !== NaN &&
//       arr[i] !== null
//     ) {
//       mynewarr.push(arr[i]);
//     }
//   }
//   console.log(mynewarr);
//   return mynewarr;
// }

// function bouncer(arr) {
//     let mynewarr = [];
//      for (let i = 0; i < arr.length; i++) {
//        if (
//          arr[i]
//        ) {
//          mynewarr.push(arr[i]);
//        }
//      }
//      console.log(mynewarr);
//      return mynewarr;
//    }

//    bouncer([7, "ate", "", false, 9]);

// console.log(bouncer(["", false, , undefined, 0, null, NaN]));
// console.log(typeof NaN);

// Slice and Splice

// function frankenSplice(arr1, arr2, n) {
//     let newArr2= [...arr2]; moze i slice da kopira
//     for (let i = 0; i < arr1.length; i++) {
//       newArr2.splice(n + i, 0, arr1[i])

//     }
//     return newArr2;
//   }

//   frankenSplice([1, 2, 3], [4, 5, 6], 1);

//sort() method - poredja brojeve u arr od min to max

//Where do I Belong
// let myArr = [3, 8, -10, 23, 19, -4, -14, 27];
// let num = 1;
// // myArr.sort((a, b) => a - b);
// myArr.push(num);
// myArr.sort((a, b) => a - b);
// console.log(myArr);
// console.log(myArr.indexOf(num));

// function getIndexToIns(arr, num) {
//   arr.push(num);
//   arr.sort((a, b) => a - b);
//   let numIndex = arr.indexOf(num);
//   return numIndex;
// }

// getIndexToIns([40, 60], 50);

//Mutations

// function mutation(arr) {
//   let newArr1 = arr[0].toLowerCase().split("");
//   let newArr2 = arr[1].toLowerCase().split("");

//   for (let i = 0; i < newArr2.length; i++) {
//     if (newArr1.indexOf(newArr2[i]) == -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(mutation(["hello", "hello"]));

// converting to boolean value

// let myNewStr = "hello world";
// let myNewValue = !!NaN;
// console.log(myNewValue);

// let egArr = [NaN, undefined, "john", 0, 1];

// let newEgArr = [];
// for (let i = 0; i < egArr.length; i++) {
//   newEgArr.push(!!egArr[i]);
// }
// console.log(newEgArr);

// let egArr = [NaN, undefined, "john", 0, 1];

// let newEgArr = [];
// for (let i = 0; i < egArr.length; i++) {
//   newEgArr.push(Boolean(egArr[i]));
// }
// console.log(newEgArr);

// let myIndexArr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myIndexArr.lastIndexOf(3));
// console.log(myIndexArr.indexOf(3));

// let myIndexCol = [];

// for (let i = 0; i < myIndexArr.length; i++) {
//   myIndexCol.push(myIndexArr.indexOf(3));
// }

// console.log(myIndexCol);
// console.log(myIndexArr.indexOf(3));

// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
