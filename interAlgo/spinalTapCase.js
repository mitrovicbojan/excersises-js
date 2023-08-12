//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//   let mystr = "";
//   for (let i in str) {
//     mystr += str[i].replace("_", " ");
//   }
//   console.log(mystr);
//   let arr = mystr.split(" ");
//   console.log(arr);
//   let newStr = "";

//   newStr = arr.join("-");
//   let extraStr = "";
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] == newStr[i].toUpperCase()) {
//       extraStr += newStr[i].toUpperCase();
//       console.log("up");
//     }
//   }
//   console.log(extraStr);
//   return newStr;
// }

// console.log(spinalCase("AllThe-small Things"));

let strHolder = "AllThe-small Things";

let newStrHolder = strHolder[0];

for (let i = 1; i < strHolder.length; i++) {
  if (strHolder[i] == strHolder[i].toLowerCase()) {
    newStrHolder += strHolder[i];
  } else if (strHolder[i] == strHolder[i].toUpperCase()) {
    newStrHolder += " " + strHolder[i];
  }
}
let removingStr = "";
for (let i in newStrHolder) {
  removingStr += newStrHolder[i].replace("_", "");
}
for (let i in newStrHolder) {
  removingStr += newStrHolder[i].replace(" ", "");
}

console.log(newStrHolder);
console.log(removingStr);

let splitArr = newStrHolder.split(" ");
console.log(splitArr);
let joinedStr = splitArr.join("");
console.log(joinedStr);
