const helpers = require("./helpers/helpers.js");

const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors());

//require knex



/**
 * [GET] /
 * returns success message upon get request
 * @returns {object} with "status" param containing "success"
 */
app.get('/', (req,res) => {
    res.json({"status": "success"});
});


/**
 * [GET] /
 * returns success message upon get request
 * @returns {object} with "status" param containing "success"
 */
app.get('/api/plants', async (req,res) => {
    res.json({"status": "success"});
});

/**
 * [GET] /
 * returns string when succesful 
 * @returns {string} "here you will get 1 plant based on id"
 */
app.get('/api/plants/:plantId', async(req, res) => {
    res.send("here you will get 1 plant based on id");
});

/**
 * [DELETE] /
 * deletes 1 plant based on id 
 * @returns {string} "deletes 1 plant based on id"
 */
app.delete('/api/plants/:plantId', async(req, res) => {
    res.send("deleted 1 plant based on id");
});

/**
 * [UPDATE] /
 * updates 1 plant based on id 
 * @returns {string} "changed 1 plant"
 */
app.put('/api/plants/:plantId', async(req, res) => {
    res.send("changed 1 plant");
});

module.exports = app;