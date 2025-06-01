import { postCreateBook } from "../routes/book/post-create-book-route";
import { getBookId } from "../routes/book/get-book-by-id-route";
import { expect } from "chai";
import {getBookSuccessSchema } from '../schemas/get-book-schema';
import { faker } from '@faker-js/faker';
import Joi from 'joi'
import BookBuilder from "../builders/book-builder";

let id: number;

describe('Tests Get Book', async () => {
    it('Verify new book by id', async () =>{

        // Arrange
        const firstName = faker.person.firstName()
        const data = new BookBuilder()
            .withWriter(firstName, 'Silver')
            .build()

        const responsePostCreate = await postCreateBook(data);
        expect(responsePostCreate.statusCode).to.eq(200);
        id = responsePostCreate.body.bookingid

        // Act
        const responseGetBookId = await getBookId(id);

        // Assert
        expect(responseGetBookId.statusCode).to.eq(200)
        expect(responseGetBookId.body.firstname).to.eq(firstName);

        // Assert Schema
        Joi.assert(responseGetBookId.body, getBookSuccessSchema)
    })

})