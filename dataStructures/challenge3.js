// Coding Challenge #3

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
//So remove this event from the game events log.
console.log(gameEvents);
gameEvents.delete(64);

console.log(gameEvents);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes"
//(keep in mind that a game has 90 minutes)

const gameKeys = [...gameEvents.keys()];
let eventLog = 0;
for (let time in gameKeys) {
  if (time < 90) {
    eventLog += gameKeys[time];
  }
}

const avgEvent = Math.floor(eventLog / 90);
console.log(`An event happened, on average, every ${avgEvent} minutes`);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

/* 
4. Loop over the events and log them to the console, 
marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

for (let event of gameEvents.keys()) {
  if (event < 45) {
    console.log(`[First half] ${event}: ${gameEvents.get(event)}`);
  } else {
    console.log(`[Second half] ${event}: ${gameEvents.get(event)}`);
  }
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
