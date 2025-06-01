import { postCreateBook } from "../routes/book/post-create-book-route";
import { expect } from "chai";
import { putBook } from "../routes/book/put-update-book-id-route";
import {updateBookSuccessSchema} from '../schemas/update-book-schema'
import { faker } from '@faker-js/faker';
import Joi from 'joi'
import BookBuilder from "../builders/book-builder";
import { getUserToken } from "../helpers/user-credentials";
import { UserType } from "../enums/user-types";
import dotenv from 'dotenv';
dotenv.config();


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
        
        const responsePostCreate = await postCreateBook(data);
        expect(responsePostCreate.statusCode).to.eq(200);
        id = responsePostCreate.body.bookingid

        // Act
        const responsePutBook = await putBook(id, token, data);

        // Assert
        expect(responsePutBook.statusCode).to.eq(200)
        expect(responsePutBook.body.firstname).to.eq(firstName);

        // Assert Schema
        Joi.assert(responsePutBook.body, updateBookSuccessSchema)
    })

})