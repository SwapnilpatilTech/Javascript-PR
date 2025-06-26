const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Fallback quotes in case the API fails
const fallbackQuotes = [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "The best way to predict the future is to create it.", author: "Peter Drucker" }
];

function displayQuote(quote) {
    quoteText.textContent = `"${quote.content}"`;
    authorText.textContent = `- ${quote.author}`;
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
    return fallbackQuotes[randomIndex];
}

function getQuote() {
    quoteText.textContent = 'Loading...';
    authorText.textContent = '';

    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            if (data.content && data.author) {
                displayQuote(data);
            } else {
                throw new Error('Invalid data structure received from API');
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            const fallbackQuote = getRandomQuote();
            displayQuote(fallbackQuote);
        });
}

newQuoteButton.addEventListener('click', getQuote);

// Load a quote when the page loads
getQuote();

console.log('Quote generator script loaded');
