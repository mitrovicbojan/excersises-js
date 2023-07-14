// const students = {
//   John: {
//     "passed the test": true,
//   },
//   Tom: {
//     "passed the test": false,
//   },
//   Ann: {
//     "passed the test": true,
//   },
// };

// function whoPassedTest(studentsObj) {
//   let result = 0;
//   for (let pupil in studentsObj) {
//     if (studentsObj[pupil]["passed the test"] == true) {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(whoPassedTest(students));

// const students = {
//   John: {
//     graduated: true,
//   },
//   Tom: {
//     graduated: false,
//   },
//   Ann: {
//     graduated: true,
//   },
// };

// function studentsGraduated(studentsObj) {
//   let result = 0;
//   for (let student in studentsObj) {
//     if (studentsObj[student].graduated) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(studentsGraduated(students));

// let students = {
//   John: {
//     age: 27,
//     graduated: false,
//   },
//   Tom: {
//     age: 32,
//     graduated: true,
//   },
//   Ann: {
//     age: 22,
//     graduated: false,
//   },
//   Sharon: {
//     age: 19,
//     graduated: false,
//   },
// };

// function arrayOfStudents(obj) {
//   return Object.keys(obj);
// }

// console.log(arrayOfStudents(students));

// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
