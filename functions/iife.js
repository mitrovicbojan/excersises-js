//Immediately Invoked Function Expressions (IIFE)

// const runOnce = function () {
//   console.log("this will never run again");
// };

// runOnce();

(function () {
  console.log("this will never run again");
})();

(() => console.log("This will also never run again"))();
