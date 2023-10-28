//Pig Latin

let vowelArr = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  let newStr = "";
  let cons = "";
  let rest = "";
  for (let i = 0; i < vowelArr.length; i++) {
    if (vowelArr[i] == str[0]) {
      newStr += str;
      return newStr + "way";
    }
  }
}

console.log(translatePigLatin("california"));
