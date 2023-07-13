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
titleCase("I'm a little tea pot");

// function titleCase(str) {
//     let myStr = str.toLowerCase();
//     let newArr = myStr.split(" ");

//     for (let i = 0; i < newArr.length; i++ ) {
//       newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1)
//     }
//     console.log(newArr);
//     return newArr.join(" ");
//   }

//   titleCase("I'm a little tea pot");
