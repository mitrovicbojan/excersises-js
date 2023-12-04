//Make a Person

const Person = function (first, last) {
  let firstName = first;
  let lastName = last;
  console.log(firstName);

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return console.log(this.getFirstName() + " " + this.getLastName()); //prvo sam stavio this.first i this.last
  };

  //return console.log(this.getFirstName() + " " + this.getLastName());
  // ostavio sam console log kad sam stavio resenje na sajtu pa je preskako...
  this.setFirstName = function (first) {
    return (firstName = first);
  };

  this.setLastName = function (last) {
    return (lastName = last);
  };

  this.setFullName = function (first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
  return "";
};

let myName = new Person("Pera", "Zdera");
console.log(myName.setFirstName("djole"));
console.log(myName.setFullName("dzoni", "b"));
console.log(myName.getFullName());
