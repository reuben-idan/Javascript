let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a": {
    let message = "Gate A";
    console.log(message);
    break;
  }
  case "b": {
    let message = "Gate B";
    console.log(message);
    break;
  }
  case "c": {
    let message = "Gate C";
    console.log(message);
    break;
  }
  default:
    alert("No gate " + String(gate));
}

if (win) {
  alert("Winner!");
}
