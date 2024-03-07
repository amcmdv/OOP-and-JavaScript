!function () {
// Using regular expression to validate input
let name = prompt("Enter your name:");
// Checking if the input contains only letters
if (/^[A-Za-z]+$/.test(name)) {
    // Display a personalised greeting
    console.log("Hello, " + name + "!");
} else {
    console.log("Invalid input. Please enter a valid name.");
}
}();