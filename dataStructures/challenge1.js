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

//1. create one player array for each team (variables 'players1' and 'players2')

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2.the first player in any array is the goalkeeper and the others are field players.
//For Bayern (team1) create one var ('gk') with goalkeeper's name
//and one array ('fieldPlayers') with the rest of the players

const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3.create an array 'allPlayers' containing all players from both teams(22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. During the game, Bayern (team1) used 3 substitute players.
//Create new array ('players1Final') containing original team1
// plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5. based on game.odds object, create one variable for each odd
// (called 'tema1', 'draw' and 'team2')

const { team1: team1, draw: x, team2: team2 } = game.odds;
console.log(team1);

//6. write a function ('printGoals') that receives an arbitrary number of player names
//Not an array, and prints each of them on the console,along with the number of
//goals that were scored (number of player names passed in)
