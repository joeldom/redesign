function fetchAndCycleStrings() {
    fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/strings.json")
        .then(response => response.json())
        .then(data => {
            const sandboxStrings = data.SandboxStrings;

            if (sandboxStrings && sandboxStrings.length > 0) {
                let index = 0;
                const sandboxTermContainer = document.getElementById("sandbox-term-container");

                setInterval(() => {
                    sandboxTermContainer.textContent = sandboxStrings[index];

                    // Move to the next string, and loop back to the start if at the end
                    index = (index + 1) % sandboxStrings.length;
                }, 750);
            } else {
                console.error("No SandboxStrings found in the JSON data.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function to initiate the fetching and cycling process
fetchAndCycleStrings();