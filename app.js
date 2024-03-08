// Create a function to display a message when the button is clicked
function displayMessage() {
  alert("Hello, GitHub!");
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Create a button element
  const button = document.createElement("button");
  button.textContent = "Click me!";
  button.addEventListener("click", displayMessage);

  // Append the button to the body of the page
  document.body.appendChild(button);
});
