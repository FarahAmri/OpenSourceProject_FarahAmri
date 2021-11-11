const express = require ('express');
const app = express();

app.get('/api/plants', async (req,res) => {
    res.json({"status": "success"});
});

module.exports = app; 