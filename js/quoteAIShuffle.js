function fetchAndCycleStrings(containerId, dataKey) {
    fetch("https://raw.githubusercontent.com/joeldom/asset/main/array/strings.json")
        .then(response => response.json())
        .then(data => {
            // Accessing parts of the data object:

            // 1. Accessing 'quotes' array:
            const quotesArray = data.quotes;

            // 2. Accessing a specific quote by its index (e.g., the first quote):
            const firstQuote = quotesArray[0];

            // 3. Accessing properties of a specific quote:
            const firstQuoteId = firstQuote.id;
            const firstQuoteNum = firstQuote.num;
            const firstQuoteText = firstQuote.quote;

            // ... (Your existing code to cycle through strings)

            if (dataKey === "quotes") {
                // If you want to cycle through all quotes:
                let index = 0;
                const termContainer = document.getElementById(containerId);

                setInterval(() => {
                    const currentQuote = quotesArray[index];
                    termContainer.textContent = currentQuote.quote; // Display the quote text

                    index = (index + 1) % quotesArray.length;
                }, 1950);
            } else {
                // ... your existing code for handling other data keys
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Example usage (assuming you have containers with these IDs):
fetchAndCycleStrings("quote-text-container", "quotes"); // Cycles through all quotes
fetchAndCycleStrings("site-term-container", "SiteStrings");
fetchAndCycleStrings("resume-term-container", "ResumeStrings");