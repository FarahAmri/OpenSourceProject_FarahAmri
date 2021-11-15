//require('dotenv').config({path: "../.env"}); 
const helpers = require("./helpers/helpers.js");

const express = require ('express');
const app = express();
const cors = require('cors');

const { manageTables } = require("./helpers/databaseHelper.js");

app.use(cors());

//require knex
const pg = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : "localhost",
      port : 5432,
      user : process.env.POSTGRES_USER,
      password : process.env.POSTGRES_PASSWORD,
      database : process.env.POSTGRES_DB
    }
  });


/**
 * [GET] /
 * returns success message upon get request
 * @returns {object} with "status" param containing "success"
 */
app.get('/', (req,res) => {
    //res.json({"status": "success"});
    pg.select("*").table("planten").then((data) => {
        console.log(data);
        res.json(data);
    });
});


/**
 * [POST] /
 * posts body to database, returns json when succesful 
 * @returns {json} "message: success"
 */
app.post('/api/plants', async(req, res) => {
    try{
        pg.table("planten").insert({naam: req.body}).then((data) => {
            res.json({ success: true, message: 'success' });
        });
    } catch (err){ 
        console.error(err);
    }
});

/**
 * [DELETE] /
 * deletes 1 plant based on id 
 * @returns {string} "deletes 1 plant based on id"
 */
app.delete('/api/plants/:plantId', async(req, res) => {
    let id = req.params.plantId; 
    try{
        pg.table("planten").del().where({
            id:id
        }).then((data) => {
            res.json({ success: true, message: 'plant succesfully deleted' });
        });
    } catch (err){ 
        console.error(err);
    }});

/**
 * [UPDATE] /
 * updates 1 plant based on id 
 * @returns {string} "changed 1 plant"
 */
app.put('/api/plants/:plantId', async(req, res) => {
    let  id = req.params.plantId;
    try{
        pg.table("planten").update({naam: "testplant"}).where({
            id:id
        }).then((data) => {
            res.json({ success: true, message: 'plant succesfully updated' });
        });
    } catch (err){ 
        console.error(err);
    }
});

manageTables(pg);
module.exports = app;