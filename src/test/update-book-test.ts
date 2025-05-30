import { postCreateBook } from "../routes/book/post-create-book-route";
import { expect } from "chai";
import { putBook } from "../routes/book/put-update-book-id-route";
import {updateBookSuccessSchema} from '../schema/update-book-schema'
import { faker } from '@faker-js/faker';
import Joi = require('joi');
import BookBuilder from "../builder/book-builder";
import { getUserToken } from "../helper/user-credentials";
import { UserType } from "../enums/user-types";
require('@dotenvx/dotenvx').config()

let response: any;
let id: number;
let token: string;

describe('Tests Put Book', async () => {

    beforeEach(async ()=>{
        token = await getUserToken(UserType.USER_VALID)
    })

    it('Verify update new book by id', async () =>{

        // Arrange
        const firstName = faker.person.firstName()
        const data = new BookBuilder()
            .withWriter(firstName, 'Silver')
            .build()
        
        response = await postCreateBook(data);
        expect(response.statusCode).to.eq(200);
        id = response.body.bookingid

        // Act
        response = await putBook(id, token, data);

        // Assert
        expect(response.statusCode).to.eq(200)
        expect(response.body.firstname).to.eq(firstName);

        // Assert Schema
        Joi.assert(response.body, updateBookSuccessSchema)
    })

})