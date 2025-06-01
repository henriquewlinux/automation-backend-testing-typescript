import { postLogin } from "../routes/login-route";
import { expect } from "chai";
import {loginSuccessSchema, loginFailSchema} from '../schemas/login-schema'
import Joi from 'joi'
import dotenv from 'dotenv';
dotenv.config();

describe('Tests Login', async () => {
    it('Verify login success', async () =>{

        // Arrange
        const credentials = {
            "username": process.env.USERNAME,
            "password": process.env.PASSWORD
        }

        // Act
        const response = await postLogin(credentials);
        
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
        const response = await postLogin(credentials);

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
        const response = await postLogin(credentials);

        // Assert
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq('Bad credentials')

        // Assert Schema
        Joi.assert(response.body, loginFailSchema)
    })
})
