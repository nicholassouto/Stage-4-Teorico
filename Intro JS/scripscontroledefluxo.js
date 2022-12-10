// flow control

console.log("a");
console.log("b");

// if...else

let temperature = 36;

if (temperature >= 37.5) {
  console.log("Febre alta");
} else if (temperature >= 36.5) {
  console.log("Febre moderada");
} else {
  console.log("Saudavel");
}

// switch

let expression = "1";

switch (expression) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
    break;
  default:
    console.log("default");
    break;
}

// throw

function sayMayName(name) {
  if (name === "") {
    throw "Nome é necessario";
  }
  console.log("depois do erro");
}

// try...catch
try {
  sayMayName();
} catch (e) {
  console.log(e);
}
