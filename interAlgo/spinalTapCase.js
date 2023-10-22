//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // str.replace(/([a-z\d])([A-Z])/g, "$1 $2");
  // console.log(str.replace(/([a-z\d])([A-Z])/g, "$1 $2"));
  let arr = str.replace(/([a-z\d])([A-Z])/g, "$1 $2").split(/\W|_/g);
  let newStr = "";
  for (let i in arr) {
    newStr = arr.join("-").toLowerCase();
  }
  return newStr;
}

spinalCase("AllThe-small Things");
// console.log(spinalCase("AllThe-small Things"));
