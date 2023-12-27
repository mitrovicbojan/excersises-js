/*
Take the IIFE below and at the end of the function,
attach an event listener that changes the color of
the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element
again
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
