const app = require("../server.js");
const request = require('supertest');

it('tests if connection to endpoint is successful', async() => {
    const response = await request(app).get('/api/plants');
    expect(response.statusCode).toEqual(200);
    expect(response.body.status).toBe("success");
});

it('tests if connection to endpoint is successful', async() => {
    const response = await request(app).get('/api/plants/:plantid');
    expect(response.statusCode).toEqual(200);
});