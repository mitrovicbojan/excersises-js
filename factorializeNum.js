function factorialize(num) {
  let newNum = 1;
  for (let i = 1; i <= num; i++) {
    newNum = newNum * i;
  }
  return newNum;
}

console.log(factorialize(5));
