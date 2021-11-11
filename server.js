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

/**
    * sends the rootfile back
    * @returns rootfile 
    */
app.get('/', async(req,res) => {
    res.send("hello");
    // pg.select('*').table("planten").then((rows) => {        
    //     res.send(rows);
    // });
});


/**
    * sends a list of all the plants in the database
    * @returns json
    */
//ROUTES
app.get('/api/plants', async (req,res) => {
    res.json({"status": "success"});
    //const db = req.app.get('db');
});

/**
    * select 1 plant based on id
    * @argument {id} int 
    * @returns 1 plant
    */
app.get('/api/plants/:plantId', async(req, res) => {
    res.send("here you will get 1 plant based on id");
});

/**
    * deletes 1 plant based on id
    * @argument {id} int 
    * @returns deleted row
    */
app.delete('/api/plants/:plantId', async(req, res) => {
    res.send("deleted 1 plant based on id");
});

/**
    * updates 1 plant based on id
    * @argument {id} int 
    * @returns changed row
    */
app.put('/api/plants/:plantId', async(req, res) => {
    res.send("changed 1 plant");
});

module.exports = app;