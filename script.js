// Selecting textarea and counter elements
const textareaEL = document.getElementById("textarea");
const TotalCharacterEL = document.getElementById("TotalCharacter");
const RemainingEL = document.getElementById("Remaining");

// Function to update character count
function updateCounter() {
  const textLength = textareaEL.value.length; // Get the length of text inside textarea
  const maxLength = textareaEL.getAttribute("maxlength"); // Get max length from textarea

  TotalCharacterEL.innerText = textLength; // Update total characters used
  RemainingEL.innerText = maxLength - textLength; // Calculate remaining characters
}

// Listen for keypress inside the textarea
textareaEL.addEventListener("input", updateCounter);

// Initialize counter on page load
updateCounter();
