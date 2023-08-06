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

let destinations = [
  {
    dest: [
      {
        tahiti: {
          A: 1,
        },
      },
      {
        syechelles: {
          B: 2,
        },
      },
    ],
  },
];

console.log(destinations);

let fruit = ["Apple", "Banana", "Cherry"];
let section = document.getElementById("destination");

for (let i in fruit) {
  let options = document.createElement("option");

  section.appendChild(options);
  options.append(fruit[i]);
}
