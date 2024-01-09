// converting str to num

console.log(Number("23"));
console.log(+"23");

//parsing
console.log(Number.parseInt("30px")); //str needs to start w/ num
console.log(Number.parseFloat("2.5rem"));

// is it not a number - isNaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN(+"23x")); //true

//isFinite
//checking if value is number
//ultimate method to check if it is a number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); //false
console.log(Number.isFinite(+"23x")); //false

//square root
console.log(Math.sqrt(25));
console.log(25 ** 1 / 2); //same

//max value
console.log(Math.max(5, 18, 11, 3, 23)); //max num; no parsing

//random
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

//rounding integers

console.log(Math.trunc(23.3));
console.log(Math.round(23.9)); //nearest int

console.log(Math.ceil(23.6)); //round up
console.log(Math.floor(23.8)); //round down

//rounding decimals

console.log((2.7).toFixed(0)); //returns str

//remainder

const isEven = (n) => n % 2 === 0;
console.log(isEven(9));
console.log(isEven(8));
