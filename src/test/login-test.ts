import { getToken, postLogin } from "../routes/login-route";
import { expect } from "chai";
import Joi = require('joi');
const schema = require('../schema/login-schema');

let response: any;
let token: any;


describe('Tests Login', async () => {
    it('Verify login success', async () =>{
        const credentials = {
            "username": "admin",
            "password": "password123"
        }

        response = await postLogin(credentials);
        expect(response.statusCode).to.eq(200);
        Joi.assert(response.body, schema.loginSuccessSchema)
    })

    it('Verify login fail with password incorrect', async () =>{
        const credentials = {
            "username": "admin",
            "password": "password1234"
        }

        response = await postLogin(credentials);
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')
        Joi.assert(response.body, schema.loginFailSchema)
    })

    it('Verify login fail with username incorrect', async () =>{
        const credentials = {
            "username": "admin2",
            "password": "password123"
        }

        response = await postLogin(credentials);
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')
        Joi.assert(response.body, schema.loginFailSchema)
    })

    // it('Get TOKEN', async () =>{
    //     const credentials = {
    //         "username": "admin",
    //         "password": "password123"
    //     }

    //     token = await getToken(credentials);
    //     console.log(token)
    // })

})