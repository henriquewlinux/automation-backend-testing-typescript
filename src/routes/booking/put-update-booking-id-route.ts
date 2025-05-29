const request = require('supertest');

export async function putBooking(id: number, token: any, body: any){
    return await
        request('https://restful-booker.herokuapp.com')
        .put(`/booking/${id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Cookie', `token=${token}`)
        .send(body)
    }