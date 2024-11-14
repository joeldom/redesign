const inputField = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const responseArea = document.getElementById("response-area");

submitBtn.addEventListener("click", function() {
    const userText = inputField.value.trim();
    if (userText) {
        // Add the new message with the current timestamp
        addMessage(userText);
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

function addMessage(text) {
    // Get the current time
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timestamp = `${hours}:${minutes}`;

    // Create a container for the message and timestamp
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    // Create the message element
    const message = document.createElement("p");
    message.textContent = text;
    message.classList.add("user-message");

    // Create the timestamp element
    const time = document.createElement("span");
    time.textContent = timestamp;
    time.classList.add("timestamp");

    // Append the message and timestamp to the container
    messageContainer.appendChild(message);
    messageContainer.appendChild(time);

    // Append the container to the response area
    responseArea.appendChild(messageContainer);
}