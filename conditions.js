// Exercise 3: Write a simple calculator application. Ask the user for the following input, 
// one by one: two numbers and a character representing a mathematical operation,
//  one of "+", "-", "*", "/". If the user input is valid, calculate the result and 
// show it to the user. If the user input is invalid, display a message that informs 
// the user that an error has occurred.

// Remember that the value returned by the prompt function is of the type string. 
// You can use the Number.isNaN method to check if you get the correct number after conversion. 
// For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.

// The program should work like this:
Numb1 = Number(prompt("Enter the first number: "));
Numb2 = Number(prompt("Enter the second number: "));
Operation = prompt("Enter the operation: ");
if (Operation == "+" && !Number.isNaN(Numb1) && !Number.isNaN(Numb2)) {
    alert(Numb1 + Numb2);
    } else if (Operation == "-" && !Number.isNaN(Numb1) && !Number.isNaN(Numb2)) {
        alert(Numb1 - Numb2);
    } else if (Operation == "*" && !Number.isNaN(Numb1) && !Number.isNaN(Numb2)) {
        alert(Numb1 * Numb2);
    } else if (Operation == "/" && !Number.isNaN(Numb1) && !Number.isNaN(Numb2)) {
        alert(Numb1 / Numb2);
    } else {
        alert("Error");
}