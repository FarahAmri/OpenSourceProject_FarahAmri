const app = require("../server.js");
const request = require('supertest');
const { response } = require("../server.js");

it('tests if connection to endpoint is successful', async() => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
});

it('tests if connection to endpoint is successful', async() => {
    const response = await request(app).get('/genus');
    expect(response.statusCode).toEqual(200);
});

describe('POST /api/plants', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/api/plants')
        .send({naam: 'snakeplant'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });


describe('POST /genus', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/genus')
        .send({genusId: "14", planttype: "bosplant"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });


describe('PUT: update plant(id:10)', function() {
    it('responds with json', function(done) {
        request(app)
          .put('/api/plants/10')
          .send({naam: "cactus"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });
});

describe('PUT: update planttype (id:2)', function() {
    it('responds with json', function(done) {
        request(app)
          .put('/genus/2')
          .send({planttype: "bomen"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });
});

describe('DELETE: delete plant (id:10)', function() {
    it('responds with json', function(done) {
        request(app)
          .delete('/api/plants/10')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });
});

describe('DELETE: delete planttype (id:12)', function() {
    it('responds with json', function(done) {
        request(app)
          .delete('/genus/12')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          });
      });
});



