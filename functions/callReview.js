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
//call method
reserve.call(diogenisFerry, 784, "Ann Miller");
console.log(diogenisFerry.reservations);

//apply method
const resData = [556, "Michael Johnson"];
reserve.apply(diogenisFerry, resData);

console.log(diogenisFerry.reservations);

//same as apply
reserve.call(poseidonFerry, ...resData);

//bind method

const reserveDF = reserve.bind(diogenisFerry);
reserveDF(885, "Mery Hassen");

const reservationArr = [
  "Nick Smith",
  "John Doe",
  "Sarah Williams",
  "Susan Cooper",
];

const reservePF566 = reserve.bind(poseidonFerry, 566);
reservePF566(reservationArr);

console.log(poseidonFerry.reservations);

poseidonFerry.tickets = 0;
poseidonFerry.buyTicket = function () {
  this.tickets++;
  console.log(this.tickets);
};

document
  .querySelector(".buy")
  .addEventListener("click", poseidonFerry.buyTicket.bind(poseidonFerry));
