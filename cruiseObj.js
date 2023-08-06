// let myCruises = [
//   {
//     tahiti: {
//       A: {
//         price: 1000,
//         number: 10,
//       },
//       B: {
//         price: 800,
//         number: 5,
//       },
//       C: {
//         price: 300,
//         number: 0,
//       },
//     },
//   },
//   {
//     seychelles: {
//       A: {
//         price: 600,
//         number: 11,
//       },
//       B: {
//         price: 400,
//         number: 2,
//       },
//       C: {
//         price: 200,
//         number: 1,
//       },
//     },
//   },
// ];

let cruises = {
  destinations: [
    {
      tahiti: [
        {
          name: "Tahiti",
        },
        {
          A: {
            price: 1000,
            numAvailable: 5,
          },
        },
        {
          B: {
            price: 8000,
            numAvailable: 7,
          },
        },
        {
          C: {
            price: 6000,
            numAvailable: 3,
          },
        },
      ],
    },
    {
      seychelles: [
        {
          name: "Seychelles",
        },
        {
          A: {
            price: 950,
            numAvailable: 4,
          },
        },
        {
          B: {
            price: 650,
            numAvailable: 6,
          },
        },
        {
          C: {
            price: 350,
            numAvailable: 1,
          },
        },
        {
          P: {
            price: 1500,
            numAvailable: 1,
          },
        },
      ],
    },
  ],
};

let keysArr = [];
function getObjKeys(props) {
  for (let i in props.destinations) {
    for (let k in props.destinations[i]) {
      // console.log(k);
      keysArr.push(k);
    }
  }
}

getObjKeys(cruises);
console.log(keysArr);

let section = document.getElementById("destination");
for (let i in keysArr) {
  let options = document.createElement("option");
  options.style.textTransform = "Capitalize";
  section.appendChild(options);
  options.append(keysArr[i]);
  options.setAttribute("id", "dest");
  options.value = keysArr[i];
}

function myFunction() {
  let newOpt = document.getElementById("dest").value;
  console.log(newOpt);
}
