import { postLogin } from "../routes/login-route";
import { expect } from "chai";
import {loginSuccessSchema, loginFailSchema} from '../schema/login-schema'
import Joi = require('joi');
require('@dotenvx/dotenvx').config()

let response: any;

describe('Tests Login', async () => {
    it('Verify login success', async () =>{

        // Arrange
        const credentials = {
            "username": process.env.USERNAME,
            "password": process.env.PASSWORD
        }

        // Act
        response = await postLogin(credentials);
        
        // Assert
        expect(response.statusCode).to.eq(200);
        
        // Assert Schema
        Joi.assert(response.body, loginSuccessSchema)
    })

    it('Verify login fail with password incorrect', async () =>{

        // Arrange
        const credentials = {
            "username": process.env.USERNAME,
            "password": process.env.PINVALID
        }

        // Act
        response = await postLogin(credentials);

        // Assert
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')

        // Assert Schema
        Joi.assert(response.body, loginFailSchema)
    })

    it('Verify login fail with username incorrect', async () =>{

        //Arrange
        const credentials = {
            "username": process.env.UINVALID,
            "password": process.env.PASSWORD
        }

        // Act
        response = await postLogin(credentials);

        // Assert
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')

        // Assert Schema
        Joi.assert(response.body, loginFailSchema)
    })
})
