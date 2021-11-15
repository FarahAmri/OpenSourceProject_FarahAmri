const app = require("../server.js");
const request = require('supertest');
const { response } = require("../server.js");

it('tests if connection to endpoint is successful', async() => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
});