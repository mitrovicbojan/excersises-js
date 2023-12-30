const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, cur, index, arr) {
  console.log(`iteration number ${index}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

//maximum value

const maxNum = movements.reduce((acc, mov) => {
  console.log(acc);
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(maxNum);
