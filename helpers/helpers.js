const helpers = {

     /**
    * returns all columns and rows from table
    * @param {db} string name of your database
    * @returns database 
    */
    getAllData(db){
        return db
        .select("*")
        .from("planten")
        .then(rows => rows);
    }
};

module.exports = helpers;