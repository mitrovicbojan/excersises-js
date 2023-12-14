const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored arry and print each player name
// along with the goal number
//example: "Goal 1: Lewandowski"

// const playersScoredArr = game.scored;
// console.log(playersScoredArr);

for (let [goal, name] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${name}`);
}

//2. Use loop o calculate the avrage odd and log it

let avgNums = Object.entries(game.odds);
console.log(avgNums);
let avgArr = [];
let sum = 0;
for (let [key, nums] of avgNums) {
  avgArr.push(nums);
}
console.log(avgArr);
for (let i in avgArr) {
  sum += avgArr[i];
}
let avgArrResult = sum / avgArr.length;
console.log(avgArrResult);

//second way

let newObj = game.odds;

let sumObj = 0;
let objArr = [];

for (let k in newObj) {
  sumObj += newObj[k];
  objArr.push(newObj[k]);
}

let newRes = sumObj / objArr.length;
console.log(newRes);
