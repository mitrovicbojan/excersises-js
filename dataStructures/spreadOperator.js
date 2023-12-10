"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "1st street",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "2nd street",
});

//creating new arr based on an existing array

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy arr

const mainMenuCopy = [...restaurant.mainMenu];

// join two arrays

const greekMenu = ["Souvlaki", "Kalamakia", "Saganaki"];

const joinMenu = [...restaurant.mainMenu, ...greekMenu];
console.log(joinMenu);

//add method

// const ingredients = [
//   prompt("Lets make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { ...restaurant, founder: "Pinokio" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = "Pinokio Pizza";
console.log(restaurantCopy.name);
console.log(restaurant.name);
