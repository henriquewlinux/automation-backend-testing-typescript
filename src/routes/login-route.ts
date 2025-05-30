import request from "supertest"
import { UserInterface } from "../interfaces/user-interface"
import HeadersBuilder from "../builder/headers-builder"
require('@dotenvx/dotenvx').config()

export async function postLogin(credentials: UserInterface) {
    const headers = new HeadersBuilder()
        .withContentType('application/json')
        .build()

    return await
        request(process.env.URL)
            .post('auth')
            .set(headers)
            .send({
                "username": credentials.username,
                "password": credentials.password
            })
}

export async function getToken(credentials: UserInterface) {
    const headers = new HeadersBuilder()
        .withContentType('application/json')
        .build()

    let token: any = await
        request(process.env.URL)
            .post('auth')
            .set(headers)
            .send({
                "username": credentials.username,
                "password": credentials.password
            })
            .expect(200)

    return token.body.token
}