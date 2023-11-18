//Sum All Primes

function sumPrimes(num) {
  let myNum = [];
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      myNum.push(i);
    }
  }
  console.log(myNum);
}

console.log(6 % 2);
console.log(sumPrimes(10));
