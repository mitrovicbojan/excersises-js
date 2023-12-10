"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //add method
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//destructuring arr
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//reassign variables - switching them
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values form a function
let [starter, mainFood] = restaurant.order(2, 0);
console.log(starter, mainFood);

//nested arr
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
