function fetchAndCycleStrings() {
    fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/strings.json")
        .then(response => response.json())
        .then(data => {
            const siteStrings = data.SiteStrings;

            if (siteStrings && siteStrings.length > 0) {
                let index = 0;
                const siteTermContainer = document.getElementById("site-term-container");

                setInterval(() => {
                    siteTermContainer.textContent = siteStrings[index];

                    // Move to the next string, and loop back to the start if at the end
                    index = (index + 1) % siteStrings.length;
                }, 750);
            } else {
                console.error("No SiteStrings found in the JSON data.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function to initiate the fetching and cycling process
fetchAndCycleStrings();