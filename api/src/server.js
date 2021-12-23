//require('dotenv').config({path: "../.env"}); 
const helpers = require("./helpers/helpers.js");

const express = require ('express'); 
const app = express();
const cors = require('cors');   
var bodyParser = require('body-parser');

const { manageTables } = require("./helpers/databaseHelper.js");

app.use(cors());    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require knex
const pg = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.POSTGRES_HOST ? process.env.POSTGRES_HOST : "localhost",
      port : 5432,
      user : "username",
      password : "password",
      database : "default"
    }
  });


/**
 * [GET] /
 * returns data fron the database plants
 * @returns {json} with all data from the database
 */
app.get('/', (req,res) => {
    //res.json({"status": "success"});
    pg.select("*").table("planten").then((data) => {
        console.log(data);
        res.json(data);
    }); 
});


/**
 * [GET] /
 * returns data fron the database genus-plants
 * @returns {json} with all data from the database
 */
app.get('/genus', (req,res) => {
    //res.json({"status": "success"});
    pg.select("*").table("genus-plants").then((data) => {
        console.log(data);
        res.json(data);
    }); 
});


/**
 * [POST] /
 * posts a plant to database, returns json when succesful 
 * @returns {json} "message: success"
 */
app.post('/api/plants', async(req, res) => {
    try{
        pg.table("planten").insert({
            naam: req.body.naam,
            planttype: req.body.planttype,
            sensor: req.body.sensor,
            waarde: req.body.waarde
        }).then((data) => { 
            res.json({ success: true, message: 'success' });
        });
    } catch (err){ 
        console.error(err);
    }
});

/**
 * [POST] /
 * posts a plant-type to database, returns json when succesful 
 * @returns {json} "message: success"
 */
app.post('/genus', async(req, res) => {
    try{
        pg.table("genus-plants").insert({
            genusId: req.body.genusId,
            planttype: req.body.planttype
        }).then((data) => {
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