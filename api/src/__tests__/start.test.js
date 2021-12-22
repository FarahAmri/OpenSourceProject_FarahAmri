const app = require("../server.js");
const request = require('supertest');
const { response } = require("../server.js");

//binnen testmap extra map maken om testen te scheiden van elkaar

it('tests if connection to endpoint is successful', async() => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
});