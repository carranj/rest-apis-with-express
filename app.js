const express = require('express');
const app = express();

const records = require('./records');

app.get('/quotes', async (req, res)=>{
    const quotes = await records.getQuotes();
    res.json(quotes);
});
//Send a GET request to /quotes READ(view) a list of quotes
app.get('/quotes/:id', (req, res)=>{
    
});
//Send a GET request to /quotes/:id to READ(view) a quote
//Send a POST request to /quotes/ CREATE a quote
//Send a PUT request to /quotes/:id UPDATE(edit) a quote
//Send a DELTE request to /quotes/:id DELETE a quote
//Send a GET request to /quotes/quote/random READ (view) a random quote

app.listen(3000, () => console.log('Quote API listening on port 3000!'));