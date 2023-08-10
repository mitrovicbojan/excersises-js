//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let mystr = "";
  for (let i in str) {
    mystr += str[i].replace("_", " ");
  }
  console.log(mystr);
  let arr = mystr.split(" ");
  console.log(arr);
  let newStr = "";

  newStr = arr.join("-");
  let extraStr = "";
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == newStr[i].toUpperCase()) {
      extraStr += newStr[i].toUpperCase();
      console.log("up");
    }
  }
  console.log(extraStr);
  return newStr;
}

console.log(spinalCase("The_Andy_Griffith_Show"));

let splitStr = "zagrebGori";
let cleanStr = "";
for (let i in splitStr) {
  if (splitStr[i] != splitStr[i].toUpperCase()) {
    cleanStr += splitStr[i];
  } else {
    cleanStr = cleanStr + " " + splitStr[i];
  }
}
console.log(cleanStr);
