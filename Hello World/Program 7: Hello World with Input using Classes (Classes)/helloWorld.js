!function () {
// Class to handle user input and greeting
class Greeting {
    constructor() {
        // Initialise the name property
        this.name = "";
    }
    
    // Method to prompt user for input
    promptName() {
        this.name = prompt("Enter your name:");
    }
    
    // Method to capitalise the first letter of the name
    capitalizeName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
    }
    
    // Method to display a personalized greeting
    displayGreeting() {
        console.log("Hello, " + this.capitaliseName() + "!");
    }
}

// Create an instance of the Greeting class
let greeting = new Greeting();
// Prompt user for input
greeting.promptName();
// Display a personalised greeting
greeting.displayGreeting();
}();