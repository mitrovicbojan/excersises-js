//Pig Latin

let vowelArr = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  let allC = "";
  if (vowelArr.includes(str[0])) {
    return str + "way";
  }
  for (let i in str) {
    if (vowelArr.includes(str[i])) {
      let strInx = str.indexOf(str[i]);
      console.log(strInx);
      let strLen = str.length;
      let rest = str.slice(strInx, strLen);
      let newStr = str.slice(0, strInx);

      return rest + newStr + "ay";
    } else {
      allC += str[i];
    }
  }
  return allC + "ay";
}
console.log(translatePigLatin("rythm"));
