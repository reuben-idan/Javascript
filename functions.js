const add = (a, b) =>
  Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
const sub = (a, b) =>
  Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
const mult = (a, b) =>
  Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;
add(1, 2); // 3
sub(1, 2); // -1
mult(1, 2); // 2
add(1, "2"); // NaN

console.log(sub(1, 2)); // -1