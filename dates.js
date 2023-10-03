let newDay = 30;
let newMonth = "5";
let myYear = 1996;

let testDate = new Date(myYear, newMonth, newDay);
console.log(testDate);
const myDate = new Date("1997-15-05");
console.log(myDate);
let newYear = 2001;
let newDate = myDate.getFullYear();
console.log(newYear - newDate);

let checkDate = new Date("2023/02/31");
console.log(checkDate.getFullYear());
