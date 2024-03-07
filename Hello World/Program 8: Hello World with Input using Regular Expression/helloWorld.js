!function () {
// Regular expression to validate input
const nameRegex = /^[A-Za-z]+$/;

// Prompt user for input
let name = prompt("Enter your name:");

// Checking if the input matches the regular expression
if (nameRegex.test(name)) {
    // Capitalise the first letter of the name
    let capitalised_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // Display a personalized greeting
    console.log("Hello, " + capitalised_name + "!");
} else {
    console.log("Invalid input. Please enter a valid name.");
}
}();
