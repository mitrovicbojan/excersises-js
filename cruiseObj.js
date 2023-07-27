let myCruises = [
  {
    tahiti: {
      A: {
        price: 1000,
        number: 10,
      },
      B: {
        price: 800,
        number: 5,
      },
      C: {
        price: 300,
        number: 0,
      },
    },
  },
  {
    seychelles: {
      A: {
        price: 600,
        number: 11,
      },
      B: {
        price: 400,
        number: 2,
      },
      C: {
        price: 200,
        number: 1,
      },
    },
  },
];

function myFunction() {
  let destination = document.getElementById("destination").value;
  let category = document.getElementById("category").value;

  for (let i in myCruises) {
    console.log(myCruises[i][destination]);
  }
}
