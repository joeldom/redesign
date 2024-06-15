function fetchAndCycleStrings(containerId, dataKey) {
    fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/strings.json")
        .then(response => response.json())
        .then(data => {
            const sectionStrings = data[dataKey];

            if (sectionStrings && sectionStrings.length > 0) {
                let index = 0;
                const termContainer = document.getElementById(containerId);

                setInterval(() => {
                    termContainer.textContent = sectionStrings[index];

                    // Move to the next string, and loop back to the start if at the end
                    index = (index + 1) % sectionStrings.length;
                }, 1950);
            } else {
                console.error(`No ${dataKey} found in the JSON data.`);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function startShuffling() {
    shuffleTerms(); // Initial shuffle
    intervalId = setInterval(shuffleTerms, 75);
    pauseButton.textContent = "Pause";
    pauseButton.classList.remove("paused"); // Remove the "paused" class
    pauseButton.removeEventListener("click", startShuffling);
    pauseButton.addEventListener("click", pauseShuffling);
}

function pauseShuffling() {
    clearInterval(intervalId);
    pauseButton.textContent = "Resume";
    pauseButton.classList.add("paused"); // Add the "paused" class
    pauseButton.removeEventListener("click", pauseShuffling);
    pauseButton.addEventListener("click", startShuffling);
}

// Call the function for each section
fetchAndCycleStrings("site-term-container", "SiteStrings");
fetchAndCycleStrings("resume-term-container", "ResumeStrings");
fetchAndCycleStrings("quote-number-term-container", "num");
fetchAndCycleStrings("quote-content-term-container", "quote");