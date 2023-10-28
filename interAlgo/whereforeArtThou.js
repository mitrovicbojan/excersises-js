//Wherefore art thou

function whatIsInAName(collection, source) {
  let newArr = [...collection];

  for (let i = 0; i < newArr.length; i++) {
    for (let k in source) {
      if (!newArr[i].hasOwnProperty(k) || newArr[i][k] != source[k]) {
        newArr.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return newArr;
}

whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });
