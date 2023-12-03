function sumFibs(num) {
  return num;
}

console.log(sumFibs(4));

function fibs(num) {
  let fibsArr = [0, 1];
  let firstNum = 0;
  let secondNum = 1;
  let nextNum = num;
  let fibSum = 0;

  for (let i = 2; i <= num; i++) {
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;
    fibsArr.push(nextNum);
  }

  for (let i in fibsArr) {
    if ((fibsArr[i] % 2 === 1) & (fibsArr[i] <= num)) {
      fibSum += fibsArr[i];
    }
  }
  return fibSum;
}

console.log(fibs(75025));
