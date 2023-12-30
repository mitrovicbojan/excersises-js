// map()

const movemnets = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const moveUSD = movemnets.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movemnets);
console.log(moveUSD);

const movementsDescriptions = movemnets.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`

  //     if (mov > 0) {
  //     return `Movement ${i + 1}: You deposited ${mov}`;
  //   } else {
  //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  //   }
);

console.log(movementsDescriptions);

// filer ()

const deposits = movemnets.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrwals = movemnets.filter((mov) => mov < 0);

console.log(withdrwals);
