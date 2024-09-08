const request = require('supertest');
const express = require('express');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello, TechShop!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, TechShop!');
  });
});
