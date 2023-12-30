/*
Create a fn 'calcAvgHumanAge', which accepts an arr
of dog's ages ('ages'), and does the following
thigs in order:
1. Calculate the dog age in human years using the
following formula: if the dog is <=2 yrs old, 
humanAge = 2*dogAge. If the dog is > 2 yrs old,
humanAge = 16 + dogAge * 4;
2. exclude all dog that are less than 18 human years old
3. calculate the avg human age of all adult dogs

test data 1: [5,2,4,1,15,8,3]
test data 2: [16,6,10,5,6,1,4]
*/

const calcAvgHumanAge = (ages) => {
  const humanAge = ages.map((age) => {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  const adultDogs = humanAge.filter((dog) => {
    return dog > 18;
  });

  const avgAge = adultDogs.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  return avgAge / adultDogs.length;
};

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));
