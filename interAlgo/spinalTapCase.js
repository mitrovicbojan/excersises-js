//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let mystr = "";
  for (let i in str) {
    mystr += str[i].replace("_", " ");
  }
  console.log(mystr);
  let arr = str.split(" ");
  console.log(arr);
  let newStr = "";
  for (let i in arr) {
    newStr = arr.join("-");
  }

  return newStr;
}

console.log(spinalCase("The_Andy_Griffith_Show"));
