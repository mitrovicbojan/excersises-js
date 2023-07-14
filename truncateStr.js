//truncate string

let mystr = "i-";
console.log(mystr.length);
let mynewstr = "";
for (let i = 0; i < 1; i++) {
  console.log((mynewstr = mynewstr + mystr[i]));
}
console.log(mynewstr + "...");

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  let myNewStr = "";
  for (let i = 0; i < num; i++) {
    myNewStr += str[i];
  }
  return myNewStr + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 2));
