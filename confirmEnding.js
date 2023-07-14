function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLength = str.length;

  let setIndex = strLength - targetLength;
  let newStr = "";
  for (let i = setIndex; i < str.length; i++) {
    newStr += str[i];
  }
  if (newStr == target) {
    return (str = true);
  } else {
    return (str = false);
  }
}

console.log(confirmEnding("He has to give me a new name", "name"));
