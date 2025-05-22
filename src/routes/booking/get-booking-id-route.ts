const request = require('supertest');

export async function getBookingId(id: number){
    return await
        request('https://restful-booker.herokuapp.com')
        .get(`/booking/${id}`)
        .set('Accept', 'application/json')
    }