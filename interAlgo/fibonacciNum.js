function sumFibs(num) {
  return num;
}

console.log(sumFibs(4));

function fibs(num) {
  let fibsArr = [];
  let firstNum = 0;
  let secondNum = 1;
  let nextNum = num;

  for (let i = 2; i <= num; i++) {
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
    fibsArr.push(nextNum);
  }
  console.log(fibsArr);
}

console.log(fibs(10));
