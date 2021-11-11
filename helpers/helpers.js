const helpers = {

    getAllData(db){
        return db
        .select("*")
        .from("planten")
        .then(rows => rows);
    }

};

module.exports = helpers;