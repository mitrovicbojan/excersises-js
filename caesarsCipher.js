//Caesars Cipher

let cipher = {
  A: "1",
  B: "2",
  C: "3",
  D: "4",
  E: "5",
  F: "6",
  G: "7",
};

function makeNewStr(str) {
  let myNewStr = "";
  str = str.toUpperCase();
  for (let i in str) {
    for (let k in cipher) {
      if (str[i] == k) {
        myNewStr += cipher[k];
      } else if (str[i] === " ") {
        myNewStr += str[i];
      }
    }
  }
  console.log(myNewStr);
}

console.log(makeNewStr("c xg"));
