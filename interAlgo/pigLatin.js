//Pig Latin

let vowelArr = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  let zeroStr = str[0];
  let newStr = "";

  for (let i in vowelArr) {
    if (vowelArr[i] == zeroStr) {
      newStr += str;
      return newStr + "way";
    } else {
      for (let i in str) {
      }
    }
    return newStr;
  }
}

translatePigLatin("aga");
console.log(translatePigLatin("aga"));
