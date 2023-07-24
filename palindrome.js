function palindrome(str) {
  let cleanStr = "";
  for (let i in str) {
    if (str[i] !== " ") {
      cleanStr += str[i];
    }
  }
  cleanStr = cleanStr.replace(/[^0-9a-z]/gi, "");
  cleanStr = cleanStr.toLowerCase();
  let revStr = "";
  for (let i = 0; i <= cleanStr.length - 1; i++) {
    revStr = cleanStr[i] + revStr;
  }

  for (let k = 0; k < cleanStr.length; k++) {
    if (cleanStr[k] != revStr[0 + k]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

palindrome("almostomla");

// let myStr = "John";

// let newStr = "";
// for (let i = 0; i <= myStr.length - 1; i++) {
//   newStr = myStr[i] + newStr;
// }

// console.log(newStr);

// for (let k = 0; k < myStr.length; k++) {
//   if (myStr[k] == newStr[0 + k]) {
//     console.log("Great");
//   } else {
//     console.log("not great");
//   }
// }
