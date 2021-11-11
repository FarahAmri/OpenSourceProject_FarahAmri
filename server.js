const express = require ('express');
const app = express(); 

app.get('/', async (req,res) => {
    res.json({"status": "success"});
});

module.exports = app; 