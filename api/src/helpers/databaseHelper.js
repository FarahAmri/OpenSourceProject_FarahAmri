async function manageTables(pg){
    pg.raw('create extension if not exists "uuid-ossp"').then(() => {
        pg.schema.hasTable('planten').then(function(exists){
            if(!exists){
                return pg.schema.createTable('planten', function(t) {
                    t.increments('id').primary();
                    t.uuid('uuid').defaultTo(pg.raw('uuid_generate_v4()'));
                    t.string('naam', 100);
                    t.string('sensor', 100);
                    t.integer('sensor-value');
                }).then(() => {
                    console.log("table user exists");
                });
            }
            else{
                console.log("table exists");
            }
        });
    });
}

module.exports = {
    manageTables
};