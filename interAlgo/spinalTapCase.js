//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let arr = str.toLowerCase().split(" ");
  console.log(arr);
  let newStr = "";
  for (let i in arr) {
    newStr = arr.join("-");
  }

  return newStr;
}

spinalCase("This Is Spinal Tap");
