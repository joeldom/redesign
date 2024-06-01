function fetchAndCycleStrings() {
    fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/strings.json")
        .then(response => response.json())
        .then(data => {
            const styleguideStrings = data.StyleguideStrings;

            if (styleguideStrings && styleguideStrings.length > 0) {
                let index = 0;
                const styleguideTermContainer = document.getElementById("styleguide-term-container");

                setInterval(() => {
                    styleguideTermContainer.textContent = styleguideStrings[index];

                    // Move to the next string, and loop back to the start if at the end
                    index = (index + 1) % styleguideStrings.length;
                }, 750);
            } else {
                console.error("No StyleguideStrings found in the JSON data.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function to initiate the fetching and cycling process
fetchAndCycleStrings();