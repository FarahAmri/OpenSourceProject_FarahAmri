const express = require ('express');
const app = express();
const cors = require('cors');

//MIDDLEWARE
app.use(cors());

//ROUTES
app.get('/api/plants', async (req,res) => {
    res.json({"status": "success"});
});

app.get('/api/plants/:plantId', async(req, res) => {
    res.send("here you will get 1 plant based on id");
});

app.delete('/api/plants/:plantId', async(req, res) => {
    res.send("deleted 1 plant based on id");
});

module.exports = app; 