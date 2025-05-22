const request = require('supertest');

export async function postLogin(credentials: any){
    return await 
        request('https://restful-booker.herokuapp.com')
        .post('/auth')
        .set('Content-Type', 'application/json')
        .send({
            "username": credentials.username,
            "password": credentials.password
        })
    }

export async function getToken(credentials: any){
    let token: any = await 
        request('https://restful-booker.herokuapp.com')
        .post('/auth')
        .set('Content-Type', 'application/json')
        .send({
            "username": credentials.username,
            "password": credentials.password
        })
        .expect(200)

        return token.body.token
    }