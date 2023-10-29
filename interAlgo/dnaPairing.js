//DNA Pairing

function pairElement(str) {
  let dna = str.split("");
  let arr = [];

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "G") {
      arr.push([dna[i], "C"]);
    } else if (dna[i] == "C") {
      arr.push([dna[i], "G"]);
    } else if (dna[i] == "A") {
      arr.push([dna[i], "T"]);
    } else if (dna[i] == "T") {
      arr.push([dna[i], "A"]);
    }
  }
  console.log(arr);
  return arr;
}

pairElement("GCG");
