// call and apply method review

const poseidonFerry = {
  ship: "Poseidon",
  code: "PF",
  imo: 456127,
  flag: "GR",
  reservations: [],
  reserve(resNum, name) {
    console.log(
      `${name} reserved a seat on ${this.ship} ferry, reservation number ${this.code}${resNum}`
    );
    this.reservations.push({ reservation: `${this.code}${resNum}`, name });
  },
};

poseidonFerry.reserve(256, "John Smith");
poseidonFerry.reserve(568, "Tom Cooper");
console.log(poseidonFerry.reservations);

const diogenisFerry = {
  ship: "Diogenis",
  code: "DF",
  imo: 21356,
  flag: "GR",
  reservations: [],
};

const reserve = poseidonFerry.reserve; //not a method anymore, it;s a func

// reserve(7895, "Adam Thompson"); doesn't work like this

reserve.call(diogenisFerry, 784, "Ann Miller");
console.log(diogenisFerry.reservations);
