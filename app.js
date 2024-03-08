// Create a function to display a message when the button is clicked
function displayMessage() {
  alert("Hello, GitHub!");
}

// Create a button element
const button = document.createElement("button");
button.textContent = "Click me!";
button.addEventListener("click", displayMessage);

// Append the button to the body of the page
document.body.appendChild(button);
