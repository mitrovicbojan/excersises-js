//Convert HTML Entities

function convertHTML(str) {
  let convertedStr = str.split("");
  for (let i in convertedStr) {
    convertedStr[i] = convertedStr[i].replace("&", "&amp;");
    convertedStr[i] = convertedStr[i].replace("<", "&lt;");
    convertedStr[i] = convertedStr[i].replace(">", "&gt;");
    convertedStr[i] = convertedStr[i].replace("'", "&apos;");
    convertedStr[i] = convertedStr[i].replace('"', "&quot;");
  }
  console.log(convertedStr);
  let newStr = convertedStr.join("");
  return newStr;
}

console.log(convertHTML('Stuff in "quotation marks"'));
