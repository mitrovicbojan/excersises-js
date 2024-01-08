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
