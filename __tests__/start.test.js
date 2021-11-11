const app = require("../server.js");
const request = require('supertest');

it('tests if connection to endpoint is succesful', async() => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
});