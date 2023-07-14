function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return (str = "");
  }
  let copyofStr = "";
  for (let i = 0; i < num; i++) {
    copyofStr += str;
  }

  return copyofStr;
}

console.log(repeatStringNumTimes("abC", 1));
