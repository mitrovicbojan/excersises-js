let newDay = 30;
let newMonth = "5";
let myYear = 1996;

let testDate = new Date(myYear, newMonth, newDay);
console.log(testDate);
const myDate = new Date("05-15-2022");
console.log(myDate);
let newYear = 2001;
let newDate = myDate.getDate();

console.log(newDate);

let setDays = [31, 30, 31, 30, 31, 30, 30, 30, 30, 31];

let count = 0;

for (let i = 0; i < 5; i++) {
  count += setDays[i];
}
console.log(count);
