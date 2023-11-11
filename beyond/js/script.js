document.addEventListener("DOMContentLoaded", function() {
  // Fetch the JSON file from the provided URL
  fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/terms.json")
    .then(response => response.json())
    .then(jsonData => {
      var termList = document.getElementById("termList");
      var currentIndex = 0;
      var isPaused = false; // Flag to track if the terms are paused

      function displayNextTerm() {
        if (!isPaused) {
          var item = jsonData.terms[currentIndex];
          var li = document.createElement("li");
          li.textContent = `${item.id}. ${item.term}: ${item.definition}`;
          termList.innerHTML = ""; // Clear previous term
          termList.appendChild(li);

          // Log ID and term to the console
          console.log(`ID: ${item.id}, Term: ${item.term}`);

          currentIndex = (currentIndex + 1) % jsonData.terms.length;
        }
      }

      // Initial display
      displayNextTerm();

      // Set interval to display the next term every 1 second
      var intervalId = setInterval(displayNextTerm, 1000);

      // Pause and resume functionality
      var pauseButton = document.getElementById("pauseButton");
      pauseButton.addEventListener("click", function() {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? "Resume" : "Pause";

        // Toggle 'paused' and 'play' classes based on the state
        pauseButton.classList.toggle("paused", isPaused);
        pauseButton.classList.toggle("play", !isPaused);

        // Log the current state to the console
        console.log(`Terms are ${isPaused ? "paused" : "resumed"}`);
      });
    })
    .catch(error => console.error("Error fetching JSON:", error));
});
