function fetchAndCycleStrings() {
    fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/strings.json")
        .then(response => response.json())
        .then(data => {
            const resumeStrings = data.ResumeStrings;

            if (resumeStrings && resumeStrings.length > 0) {
                let index = 0;
                const resumeTermContainer = document.getElementById("resume-term-container");

                setInterval(() => {
                    resumeTermContainer.textContent = resumeStrings[index];

                    // Move to the next string, and loop back to the start if at the end
                    index = (index + 1) % resumeStrings.length;
                }, 750);
            } else {
                console.error("No ResumeStrings found in the JSON data.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function to initiate the fetching and cycling process
fetchAndCycleStrings();