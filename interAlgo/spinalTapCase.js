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

let strHolder = "zagrebGori";

let newStrHolder = "";

for (let i in strHolder) {
  if (strHolder[i] == strHolder[i].toUpperCase()) {
    newStrHolder = strHolder.slice(0, i);
    for (let k in strHolder) {
      if (strHolder[k] == strHolder[k].toUpperCase()) {
        newStrHolder += " " + strHolder.slice(k);
      }
    }
  }
}

console.log(newStrHolder);
