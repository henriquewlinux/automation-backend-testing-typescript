import { postCreateBooking } from "../routes/booking/post-create-booking-route";
import { getBookingId } from "../routes/booking/get-booking-id-route";
import { expect } from "chai";
import {getBookingSuccessSchema } from '../schema/get-booking-id-schema';
import { faker } from '@faker-js/faker';
import Joi = require('joi');
import BookingBuilder from "../builder/booking-builder";

let response: any;
let id: any;

describe('Tests Get Booking', async () => {
    it('Verify new booking by id', async () =>{

        const firstName = faker.person.firstName()
        const data = new BookingBuilder()
            .withWriter(firstName, 'Silver')

        response = await postCreateBooking(data);
        expect(response.statusCode).to.eq(200);
        id = response.body.bookingid

        response = await getBookingId(id);
        expect(response.statusCode).to.eq(200)
        expect(response.body.booking.firstname).to.eq(firstName);

        Joi.assert(response.body, getBookingSuccessSchema)
    })

})