// script.js
document.addEventListener('DOMContentLoaded', function() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    let quotes = [];
    let currentIndex = 0;

    // Fetch quotes from the JSON file
    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            quotes = data;
            displayQuote();
            setInterval(nextQuote,2000); // Change quote every 5 seconds
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
            quoteText.textContent = 'Failed to load quotes.';
        });

    function displayQuote() {
        const { quote, author } = quotes[currentIndex];
        quoteText.textContent = `"${quote}"`;
        quoteAuthor.textContent = `- ${author}`;
    }

    function nextQuote() {
        currentIndex = (currentIndex + 1) % quotes.length;
        displayQuote();
    }
});
