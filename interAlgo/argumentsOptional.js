// Arguments Optional

function addTogether() {
  let props = [...arguments]; //ju ladno!! slucajno sam nasao ovu foru
  let firstNum = props[0];
  let secondNum = props[1];
  console.log(props);
  console.log(firstNum);
  console.log(secondNum);

  if ((typeof firstNum === "number") & (typeof secondNum === "number")) {
    return firstNum + secondNum;
  }
  if (props.length === 1) {
    return "shit";
  }
}

console.log(addTogether(2));
