// const btn = document.getElementById("btn");
// const card = document.getElementById("container");
// btn.addEventListener("click", function () {
//   card.classList.toggle("inactive");
//   console.log("click");
// });

const fruit = {
  apple: 5,
  orange: 10,
  pineapple: 30,
  banana: 16,
};

// console.log(Object.keys(fruit));

function myFunction() {
  let selectValue = document.getElementById("mySelect").value;
  let output = document.getElementById("tag");
  let result = 0;
  for (let i in fruit) {
    if (i === selectValue) {
      result += fruit[selectValue];
    }
  }
  output.innerText = result;
}
