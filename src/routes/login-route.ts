import request from "supertest"
import { UserInterface } from "../interfaces/user-interface"
require('@dotenvx/dotenvx').config()

export async function postLogin(credentials: UserInterface){
    return await 
        request(process.env.URL)
        .post('auth')
        .set('Content-Type', 'application/json')
        .send({
            "username": credentials.username,
            "password": credentials.password
        })
    }

export async function getToken(credentials: UserInterface){
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