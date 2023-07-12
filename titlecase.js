//Title Case a Sentence

function titleCase(str) {
  let myStr = str.toLowerCase();
  let newArr = str.split(" ");
  let upperArr = [];
  for (let i = 0; i < newArr.length; i++) {
    upperArr = upperArr + newArr[i][0].toUpperCase();
  }
  console.log(upperArr);
  console.log(newArr);
  return str;
}
