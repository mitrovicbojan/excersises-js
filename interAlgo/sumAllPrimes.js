//Sum All Primes

function sumPrimes(num) {
  let numArr = [...Array(num + 1).keys()];

  function isPrime(prop) {
    if (prop < 2) return false;
    for (var i = 2; i < prop; i++) {
      if (prop % i == 0) return false;
    }
    return prop > 1;
  }

  let primes = numArr.filter(isPrime);

  console.log(primes);
}

console.log(sumPrimes(10));

// function isPrime(num) {
//   let newArr = [];
//   if (num < 2) return false;
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//     else {
//       newArr.push(num);
//     }
//   }
//   console.log(newArr);
// }
// console.log(isPrime(11));
