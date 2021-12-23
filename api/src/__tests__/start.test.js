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

describe("tests the post request", async() => {
    const response = await request(app).post('/api/plants');
    
});
