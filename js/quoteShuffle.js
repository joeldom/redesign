// pulled from keyShuffle 6.14.2024
// [] change to point to array\quotes.json == C:\Users\...\...\Repos\asset\array\quotes.json
let termStrings = [];
let currentIndex = 0;
let intervalId;
const quoteContainer = document.getElementById("quote-container");
const pauseButton = document.getElementById("pauseButton");

function fetchTermStrings() {
    fetch('https://raw.githubusercontent.com/joeldom/asset/main/array/quotes.json')
        .then(response => response.json())
        .then(data => {
            termStrings = data.quote || [];
            startShuffling(); // Start shuffling once data is loaded
        })
        .catch(error => console.error('Error fetching term strings:', error));
}

function shuffleTerms() {
    const randomIndex = Math.floor(Math.random() * termStrings.length);
    quoteContainer.textContent = termStrings[randomIndex];
    //console.log(termStrings[randomIndex]);
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

// Fetch term strings initially
fetchTermStrings();