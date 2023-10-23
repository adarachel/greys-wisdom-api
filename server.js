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