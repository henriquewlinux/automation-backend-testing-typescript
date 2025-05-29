const request = require('supertest');
require('@dotenvx/dotenvx').config()
const url = process.env.URL
console.log(url)

export async function postLogin(credentials: any){
    return await 
        request(process.env.URL)
        .post('auth')
        .set('Content-Type', 'application/json')
        .send({
            "username": credentials.username,
            "password": credentials.password
        })
    }

export async function getToken(credentials: any){
    let token: any = await 
        request(process.env.URL)
        .post('auth')
        .set('Content-Type', 'application/json')
        .send({
            "username": credentials.username,
            "password": credentials.password
        })
        .expect(200)

        return token.body.token
    }