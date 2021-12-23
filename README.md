# OpenSourceProject_FarahAmri
Open Source Project for Development 5 course. Built with knex.js, docker and express.
# start this application
First create a .env file
Then copy the .env example and paste to the .env file

To run this app run "docker-compose up --build -d"

OR locally use the command "npm start" 

# Endpoints 
## GET 

```
"/" 
```
Lists all plants
returns a list of all plants in de database

status 200 = success

```
"/genus" 
```
Lists all plant types
returns a list of all the planttypes in the database

status 200 = success

## POST

```
"/api/plants" 
```
post a new plant
post a new plant to the database

Request body schema: application/json
#### Body structure: 
naam: string
planttype: integer
sensor: string
waarde: integer

status 200 = success

```
"/genus" 
```
post a new planttype
post a new planttype to the database

Request body schema: application/json
#### Body structure: 
plantId: integer
planttype: string

status 200 = success
## PUT

```
"/api/plants/:plantId" 
```
update a plant
Updates a plant based on id

### Params structure
plantId: integer

status 200 = success

```
"/genus/:genusId"
```
update a planttype
Updates a planttype based on id

### Params structure
genusId: integer

status 200 = success

## DELETE

```
"/api/plants/:plantId" 
```
delete a plant
Deletes a plant based on id

### Params structure
plantId: integer

status 200 = success

```
"/genus/:genusId" 
```
delete a planttype
Deletes a planttype based on id

### Params structure
genusId: integer

status 200 = success