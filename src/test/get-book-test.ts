import { postCreateBook } from "../routes/book/post-create-book-route";
import { getBookId } from "../routes/book/get-book-by-id-route";
import { expect } from "chai";
import {getBookSuccessSchema } from '../schema/get-book-schema';
import { faker } from '@faker-js/faker';
import Joi = require('joi');
import BookBuilder from "../builder/book-builder";

let response: any;
let id: number;

describe('Tests Get Book', async () => {
    it('Verify new book by id', async () =>{

        // Arrange
        const firstName = faker.person.firstName()
        const data = new BookBuilder()
            .withWriter(firstName, 'Silver')
            .build()

        response = await postCreateBook(data);
        expect(response.statusCode).to.eq(200);
        id = response.body.bookingid

        // Act
        response = await getBookId(id);

        // Assert
        expect(response.statusCode).to.eq(200)
        expect(response.body.firstname).to.eq(firstName);

        // Assert Schema
        Joi.assert(response.body, getBookSuccessSchema)
    })

})