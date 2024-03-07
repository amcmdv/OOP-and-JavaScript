!function () {
// Function to capitalise the first letter of a string
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Prompt user for input
let name = prompt("Enter your name:");

// Algorithm to handle user input and greeting
if (name !== null && name !== "") {
    // Capitalise the first letter of the name
    let capitalised_name = capitaliseFirstLetter(name);
    // Display a personalised greeting
    console.log("Hello, " + capitalised_name + "!");
} else {
    console.log("Invalid input. Please enter a valid name.");
}
}();