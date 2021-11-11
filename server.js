const helpers = require("./helpers/helpers.js");

const express = require ('express');
const app = express();
const cors = require('cors');

//MIDDLEWARE
app.use(cors());

//KNEX
const pg = require('knex')({
    client: 'pg',
    version: '9.6',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://postgres:admin@localhost:5432/plantsDB'
});

app.get('/', async(req,res) => {
    res.send("hello");
    // pg.select('*').table("planten").then((rows) => {        
    //     res.send(rows);
    // });
});

//ROUTES
app.get('/api/plants', async (req,res) => {
    res.json({"status": "success"});
    //const db = req.app.get('db');
});

app.get('/api/plants/:plantId', async(req, res) => {
    res.send("here you will get 1 plant based on id");
});

app.delete('/api/plants/:plantId', async(req, res) => {
    res.send("deleted 1 plant based on id");
});

app.put('/api/plants/:plantId', async(req, res) => {
    res.send("changed 1 plant");
});

module.exports = app; 