const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Allow the platform to set the port if necessary
const quotes = require('./quotes.json'); // Import your quotes
const cors = require('cors');
app.use(cors());

// Root path ("/") for a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Grey\'s Wisdom API');
});

// API path ("/greys-wisdom-api") to get a random quote
app.get('/get', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex].quote });
});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});

// API path ("/greys-wisdom-api") to get a character's quote
app.get('/get', (req, res) => {
    const characterName = req.query.character;

    if (!characterName) {
        res.status(400).json({ error: 'Character parameter is missing.' });
        return;
    }

    const characterQuotes = quotes.filter(quote => quote.person === characterName);

    if (characterQuotes.length === 0) {
        res.status(404).json({ error: 'No quotes found for this character.' });
        return;
    }

    const randomIndex = Math.floor(Math.random() * characterQuotes.length);
    res.json({ quote: characterQuotes[randomIndex].quote });
});