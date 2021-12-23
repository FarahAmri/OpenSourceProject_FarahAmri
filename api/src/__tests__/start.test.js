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
