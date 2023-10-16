//Use the reduce Method to Analyze Data

const cars = [
  {
    brand: "BMW",
    price: 25000,
  },
  {
    brand: "Honda",
    price: 26000,
  },
  {
    brand: "Toyota",
    price: 27000,
  },
];

const sumPrices = cars.reduce((brand, value) => brand + value.price, 0);
console.log(sumPrices);

const brandsObj = cars.reduce((obj, car) => {
  obj[car.brand] = car.price;
  return obj;
}, {});
console.log(brandsObj);
