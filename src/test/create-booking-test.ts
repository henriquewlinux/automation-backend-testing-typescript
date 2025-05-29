import { postCreateBooking } from "../routes/booking/post-create-booking-route";
import { expect } from "chai";
import {createBookingSuccessSchema} from '../schema/create-booking-schema';
import { faker } from '@faker-js/faker';
import Joi = require('joi');
import BookingBuilder from "../builder/booking-builder";

let response: any;

describe('Tests Create Booking', async () => {
    it('Verify create bookin success', async () =>{

        const firstName = faker.person.firstName()
        const data = new BookingBuilder()
            .withWriter(firstName, 'Silver')
        
        console.log(data)
        
        response = await postCreateBooking(data);
        expect(response.statusCode).to.eq(200);
        expect(response.body.booking.firstname).to.eq(firstName);

        Joi.assert(response.body, createBookingSuccessSchema)
    })

})