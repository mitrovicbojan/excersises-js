let myStr = "abc";

let str = "abc";
let duzina = str.length * str.length;
console.log(str);
for (let i = 0; i < duzina; i++) {
  str += str[i];
  if (duzina < 0) {
    str = "";
  }
}
console.log(str);
