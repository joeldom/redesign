const inputField = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const responseArea = document.getElementById("response-area");

submitBtn.addEventListener("click", function() {
    const userText = inputField.value.trim();
    if (userText) {
        // Display the text in the response area
        responseArea.textContent = userText;
        // Clear the input field
        inputField.value = "";
    }
});

// Optionally, allow pressing "Enter" to submit as well
inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});