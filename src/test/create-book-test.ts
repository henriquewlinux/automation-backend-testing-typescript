import { postCreateBook } from "../routes/book/post-create-book-route";
import { expect } from "chai";
import {createBookSuccessSchema} from '../schema/create-book-schema';
import { faker } from '@faker-js/faker';
import Joi from 'joi'
import BookBuilder from "../builder/book-builder";


describe('Tests Create Book', async () => {
    it('Verify create book success', async () =>{

        // Arrange
        const firstName = faker.person.firstName()
        const data = new BookBuilder()
            .withWriter(firstName, 'Silver')
            .build()
        
        // Act
        const response = await postCreateBook(data);

        // Assert
        expect(response.statusCode).to.eq(200);
        expect(response.body.booking.firstname).to.eq(firstName);

        // Assert Schema
        Joi.assert(response.body, createBookSuccessSchema)
    })

})