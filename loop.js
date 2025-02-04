let upperLimit = Number(prompt("Enter upper limit"));
let lowerLimit = Number(prompt("Enter lower limit"));

if (
  !Number.isNaN(upperLimit) &&
  !Number.isNaN(lowerLimit) &&
  upperLimit > lowerLimit
) {
  for (i = upperLimit; i >= lowerLimit; i -= 10) {
    console.log(i);
  }
}
