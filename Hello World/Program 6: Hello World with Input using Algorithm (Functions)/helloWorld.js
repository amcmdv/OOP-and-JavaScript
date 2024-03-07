!function () {
// Function to capitalise the first letter of a string
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Prompt user for input
let name = prompt("Enter your name:");
// Capitalise the first letter of the name
let capitalized_name = capitaliseFirstLetter(name.toLowerCase());
// Display a personalized greeting
console.log("Hello, " + capitalised_name + "!");
}();