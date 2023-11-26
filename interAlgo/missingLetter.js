//Missing letters
function fearNotLetter(str) {
  let wholeAbc = "abcdefghijklmnopqrstuvwxyz";
  let firstIndex = wholeAbc.indexOf(str[0]);

  let correctStr = wholeAbc.slice(firstIndex, firstIndex + str.length);

  for (let i in correctStr) {
    if (!str.includes(correctStr[i])) {
      return correctStr[i];
    }
  }
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
