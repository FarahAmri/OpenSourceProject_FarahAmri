const express = require ('express');
const app = express(); 

app.get('/', (req,res) => {
    res.send('get request succeeded');
});

module.exports = app; 