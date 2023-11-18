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

// Call the function for each section
fetchAndCycleStrings("site-term-container", "SiteStrings");
fetchAndCycleStrings("resume-term-container", "ResumeStrings");
fetchAndCycleStrings("styleguide-term-container", "StyleguideStrings");
fetchAndCycleStrings("sandbox-term-container", "SandboxStrings");