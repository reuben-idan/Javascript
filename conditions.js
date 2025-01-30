// Exercise 1: Write a script that will ask the user to input a number.
// Display the message "Bingo!" when the number is greater than 90
//  but less than 110, otherwise display the message: "Miss". Use the if statement.

let number = Number(prompt("Please enter a number", 0));
if (number > 90 && number < 110) {
  alert("Bingo!");
} else {
  alert("Miss");
}
