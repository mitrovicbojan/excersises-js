// const btn = document.getElementById("btn");
// const card = document.getElementById("container");
// btn.addEventListener("click", function () {
//   card.classList.toggle("inactive");
//   console.log("click");
// });

const fruit = {
  apple: 0,
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
  if (!result == 0) {
    output.innerText = `Items available: ${result}`;
  } else {
    output.innerText = "Item not available";
  }
}

const cruises = [
  {
    tahiti: [
      {
        ship: [
          {
            name: "danzig",
            built: 1992,
            cabins: [
              {
                A: [
                  {
                    number: 10,
                    price: 5000,
                  },
                ],
              },
              {
                B: [
                  {
                    number: 7,
                    price: 3000,
                  },
                ],
              },
              {
                C: [
                  {
                    number: 3,
                    price: 1000,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

cruises.forEach((element) => {
  console.log(element.tahiti);
  let destination = element.tahiti;

  for (let i in destination) {
    let ships = destination[i];

    for (let k in ships) {
      let myShip = ships[k];
      for (let z in myShip) {
        let myShipObj = myShip[z];

        for (let cat in myShipObj.cabins) {
          let categories = myShipObj.cabins[cat];
          for (let a in categories.A) {
            console.log(categories.A[a].price);
          }
        }
      }
    }
  }
});

let myCruises = [
  {
    tahiti: {
      catA: {
        price: 1000,
        number: 10,
      },
    },
  },
];

for (let i in myCruises) {
  console.log(myCruises[i]);
  for (let ke in myCruises[i]) {
    console.log(myCruises[i][ke]);
    let category = myCruises[i][ke];
    for (let prop in category) {
      console.log(category[prop]);
      console.log(category[prop].price);
      console.log(category[prop].number);
    }
  }
}
