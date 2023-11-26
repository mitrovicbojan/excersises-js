//Everything Be True

function truthCheck(collection, pre) {
  for (let i of collection) {
    if ((typeof i[pre] !== "boolean") & (Boolean(i[pre]) == false)) {
      return false;
    }
  }
  return true;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: true },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: NaN },
    ],
    "isBot"
  )
);
