"use strict";

const juliasData = [3, 5, 2, 12, 7];
const katesData = [4, 1, 15, 8, 3];

// more test data: [9,16,,6,7,3]; [10,5,6,1,4]
/*
Create a fn 'checkDogs' which acceptes 2 arrs
of dog's ages ('dogsJulia' and 'dogsKate'), and does
the following:
1. Julia found out that the owners of the first and the last
two dogs actually have cats, not dogs! so, create a 
shallow copy of Julia's arr, and remove the cat ages from that 
copied arr (because it is a bad practice to mutate
    fns parameters)

2. create an arr with both Julia's (corrected) and
Kate's data
3. For each remaining dog, log to the console whether 
it is an adult (Dog number 1 is an adult, and is 5 years old.)
or a puppy (Dog number 2 is still a puppy.)
4.run the function with noth test datasets

*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaArr = [...dogsJulia].slice(1, -2);
  const dogsKateArr = [...dogsKate];

  const allDogsArr = dogsJuliaArr.concat(dogsKateArr);

  allDogsArr.forEach(function (dog, num) {
    dog > 3
      ? console.log(
          `Dog number ${num + 1} is an adult, and is ${dog} years old.`
        )
      : console.log(`Dog number ${num + 1} is still a puppy`);
  });
  console.log(allDogsArr);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
