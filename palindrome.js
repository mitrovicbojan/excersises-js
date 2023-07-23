function palindrome(str) {
  let cleanStr = "";
  for (let i in str) {
    if (str[i] !== " ") {
      cleanStr += str[i];
    }
  }

  cleanStr = cleanStr.replace(/[^0-9a-z]/gi, "");

  console.log(cleanStr);
  return true;
}

palindrome("eye%^&%^ of #the tiger");
