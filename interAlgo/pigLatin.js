//Pig Latin

let vowelArr = ["a", "e", "i", "o", "u"]; // maybe add "y"

function translatePigLatin(str) {
  let newStr = "";
  let cons = "";

  for (let i = 0; i < vowelArr.length; i++) {
    if (vowelArr[i] == str[0]) {
      newStr += str;
      return newStr + "way";
    }
  }
  for (let i = 0; i < vowelArr.length; i++) {
    if (str[i] !== vowelArr[i]) {
      cons += str[i];
    }
  }
  console.log(cons);
}

console.log(translatePigLatin("schwartz"));
