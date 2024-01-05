const movemnets = [200, 450, -400, 3000, -650, -130, 70, 1300];

// includes() checks for equality
console.log(movemnets);
console.log(movemnets.includes(-130));

//some() method checks for conditions

const anyDeposits = movemnets.some((mov) => mov > 1500);
console.log(anyDeposits);

//every() method
//returns true if all elements are true

console.log(movemnets.every((mov) => mov > 0));

const movemnets2 = [200, 450, 3000, 70, 1300];

console.log(movemnets2.every((mov) => mov > 0));

//separate callback

const deposit = (mov) => mov > 0;

console.log(movemnets2.some(deposit));
