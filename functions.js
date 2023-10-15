//Refactor Global Variables Out of Functions
//The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr, bookName) {
  let newBookList = [...arr];
  newBookList.push(bookName);
  return newBookList;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newBookList = [...arr];
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
  }
}

console.log(add(bookList, "Hello"));
console.log(
  remove(add(bookList, "Hello"), "On The Electrodynamics of Moving Bodies")
);
let myNum = 2;

function addNum(myNum) {
  let res = myNum + 2;
  return res;
}

console.log(addNum(5));

function resue(add) {
  let count = addNum(add) + 2;
  return count;
}
console.log(resue(0));
