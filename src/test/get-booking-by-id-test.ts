import { postCreateBooking } from "../routes/booking/post-create-booking-route";
import { getBookingId } from "../routes/booking/get-booking-id-route";
import { expect } from "chai";
import Joi = require('joi');
const schema = require('../schema/get-booking-id-schema');
const { faker } = require('@faker-js/faker')
import * as test_data from '../data/test_data.json'

let response: any;
let id: any;

describe('Tests Get Booking', async () => {
    it('Verify new booking by id', async () =>{

        const data = test_data.requestBody.createBookin
        data.firstname = faker.person.firstName()
        data.lastname = faker.person.lastName()
        
        response = await postCreateBooking(data);
        expect(response.statusCode).to.eq(200);
        id = response.body.bookingid

        response = await getBookingId(id);
        expect(response.statusCode).to.eq(200)
        //expect(response.body.booking.firstname).to.eq(data.firstname);
        //expect(response.body.booking.firstname).to.eq(data.lastname);

        Joi.assert(response.body, schema.getBookingSuccessSchema)
    })

})