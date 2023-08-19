//Match a Literal String with Different Possibilities

let lyricsStr = "Kinda like a madness that refuses to subside";
let lyricsRegex = /kinda|Kinda/;
let result = lyricsRegex.test(lyricsStr);

console.log(result);
