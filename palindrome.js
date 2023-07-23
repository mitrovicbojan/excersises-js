function palindrome(str) {
  let cleanStr = "";
  for (let i in str) {
    if (str[i] !== " ") {
      cleanStr += str[i];
    }
  }

  cleanStr = cleanStr.replace(/[^0-9a-z]/gi, "");

  console.log(cleanStr);
  return true;
}

palindrome("eye%^&%^ of #the tiger");

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
