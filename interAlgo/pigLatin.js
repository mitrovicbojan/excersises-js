//Pig Latin

let vowelArr = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  let inx = 1;
  let newStr = str.slice(0, inx);
  let rest = str.slice(inx);

  if (vowelArr.includes(str[0])) {
    return str + "way";
  }
  for (let i = 0; i < str.length; i++) {
    if (!vowelArr.includes(str[i])) {
      console.log(i);
      inx + 1;
    }
  }
  console.log(inx);
  return rest + newStr + "ay";
}

console.log(translatePigLatin("california"));
