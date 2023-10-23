const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed
const quotes = require('./quotes.json'); // Import your quotes

app.get('/greys-wisdom-api', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex].quote });
});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});