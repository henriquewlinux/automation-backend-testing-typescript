const request = require('supertest');

export async function postCreateBooking(body: any){
    return await
        request('https://restful-booker.herokuapp.com')
        .post('/booking')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body)
    }