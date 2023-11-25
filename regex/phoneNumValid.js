//Telephone Number Validator

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// return true or false

function telephoneCheck(str) {
  let myReg = new RegExp(
    "^[1-9]{1}[0-9]{0,2}[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{2} [0-9]{4}$|^[1-9]{1}[0-9]{0,2}[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{2}[0-9]{4}$"
  );
  if (myReg.test(str)) {
    console.log("Phone number is valid");
    return true;
  } else {
    console.log("Phone number is not valid");
    return false;
  }
}

// telephoneCheck("555-555-5555");
console.log(telephoneCheck("15555555555"));

// let myReg = new RegExp(
//     "^[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$"
//   );
