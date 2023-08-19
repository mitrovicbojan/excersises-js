//Ignore Case While Matching

let titleStr = "Ignore Case While Matching";
let titleRegex = /ignore CaSe while matchinG/i;
let result = titleRegex.test(titleStr);

console.log(result);
