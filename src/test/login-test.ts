import { getToken, postLogin } from "../routes/login-route";
import { expect } from "chai";
import {loginSuccessSchema, loginFailSchema} from '../schema/login-schema'
import Joi = require('joi');
require('@dotenvx/dotenvx').config()

let response: any;
let token: any;


describe('Tests Login', async () => {
    it('Verify login success', async () =>{
        const credentials = {
            "username": process.env.USERNAME,
            "password": process.env.PASSWORD
        }

        response = await postLogin(credentials);
        expect(response.statusCode).to.eq(200);
        Joi.assert(response.body, loginSuccessSchema)
    })

    it('Verify login fail with password incorrect', async () =>{
        const credentials = {
            "username": "admin",
            "password": "password1234"
        }

        response = await postLogin(credentials);
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')
        Joi.assert(response.body, loginFailSchema)
    })

    it('Verify login fail with username incorrect', async () =>{
        const credentials = {
            "username": "admin2",
            "password": "password123"
        }

        response = await postLogin(credentials);
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')
        Joi.assert(response.body, loginFailSchema)
    })
})
