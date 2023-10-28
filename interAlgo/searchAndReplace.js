//Search and Replace

function myReplace(str, before, after) {
  after = after.toLowerCase();
  let beforeUp = before[0].toUpperCase();

  if (beforeUp === before[0]) {
    let after2 = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, after2);
  } else {
    return str.replace(before, after);
  }
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
