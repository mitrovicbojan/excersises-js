//Challenge 4

/*
Julia and Kate are still studuing dogs, and this time
they are studying if dogs are eating too much or too
little.
Eating too much means the dog's current food portion
is larger than the recommended portion, and eating
too little is the opposite. 
Eating an okay amount means the dog's current food
portion is within a range 10% above and 10% below the
recommended portion (see hint).

1. Loop over the array containing dog objects, and 
for each dog, calculate the recommended food portion
and add it to the object as a new property. Do NOT
create a new array, simply loop over the array.
Formula: recommendedFood = weight ** 0.75 * 28 (The
result is in grams of food, and the weight needs to
be in kg)

2. Find Sarah's dog and log to the console whether 
it's eating too much or too little. Hint: Some dogs
have multiple owners, so you first need to find Sarah
in the owners array, and so this one is a bit tricky

3. Create an array containing all owners of dogs who
eat too much ('ownersEatTooMuch') and an array with
all owners of dogs who eat too little 
('ownersEatTooLittle')

4. Log a string to the console for each array created
in 3., like this: "Matilda and Alice and Bob's dogs
eat too much!" and "Sarah and John and Michael's dogs
eat too little!"

5. Log to the console whether there is any dog eating
EXACTLY the amount of food that is recommended (just
true or false)

6. Log to the console whether there is any dog eating
an okay amount of food (true or false)

7. Create an array containing the dogs that are eating
an OKAY amount of food(reuse the condition in 6.)

8. Create a shallow copy of the dogs array and sort
it by recommended food portion in an ascending order
(keep in mind that the porttions inside the array's obj)

TEST DATA:

const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']},
];
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

console.log(dogs);

//1.
dogs.forEach((dog) => {
  dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(2));
});
console.log(dogs);

//2.
dogs.forEach((owner) => {
  const ownerArr = owner.owners.some((oneOwner) => oneOwner == "Sarah")
    ? console.log(owner.owners)
    : owner;
});

//3.
/*
Eating an okay amount means the dog's current food
portion is within a range 10% above and 10% below the
recommended portion (see hint).
*/
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.map((dog) => {
  if (dog.curFood * 0.9 > dog.recommendedFood) {
    ownersEatTooLittle.push(dog.owners);
  } else {
    ownersEatTooMuch.push(dog.owners);
  }
});
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

//4.
