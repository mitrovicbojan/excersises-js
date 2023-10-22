//Introduction to Currying and Partial Application

//The arity of a function is the number of arguments it requires.
//Currying a function means to convert a function of N arity into N functions of arity 1.

//it restructures a function so it takes one argument,
//then returns another function that takes the next argument, and so on.

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried = (x) => (y) => x + y;

curried(1)(2);

//partial application can be described as applying a few arguments to a function at a time
// and returning another function that is applied to more arguments.

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

//Fill in the body of the add function so it uses currying to add parameters x, y, and z.

function add(x) {
  // Only change code below this line
  return (y) => (z) => x + y + z;

  // Only change code above this line
}

add(10)(20)(30);
