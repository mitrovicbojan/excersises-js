//Caesars Cipher

let cipher = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function makeNewStr(str) {
  let myNewStr = "";
  str = str.toUpperCase();
  for (let i in str) {
    if (str[i] in cipher) {
      myNewStr += cipher[str[i]];
    } else if ((str[i] == " ") ^ (str[i] == "!")) {
      myNewStr += str[i];
    }
  }
  console.log(myNewStr);
}

console.log(makeNewStr("SERR CVMMN!"));
