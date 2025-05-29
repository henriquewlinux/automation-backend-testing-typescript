import { postCreateBooking } from "../routes/booking/post-create-booking-route";
import { expect } from "chai";
import { putBooking } from "../routes/booking/put-update-booking-id-route";
import { getToken } from "../routes/login-route";
import {updateBookingIdSuccessSchema} from '../schema/update-booking-id-schema'
import { faker } from '@faker-js/faker';
import Joi = require('joi');
import BookingBuilder from "../builder/booking-builder";
require('@dotenvx/dotenvx').config()

let response: any;
let id: any;
let token: any;

describe('Tests Put Booking', async () => {

    beforeEach(async ()=>{
        const credentials = {
            "username": process.env.USERNAME,
            "password": process.env.PASSWORD
        }

        token = await getToken(credentials)
    })

    it('Verify update new booking by id', async () =>{

        const firstName = faker.person.firstName()
        const data = new BookingBuilder()
            .withWriter(firstName, 'Silver')
        
        response = await postCreateBooking(data);
        expect(response.statusCode).to.eq(200);
        id = response.body.bookingid

        response = await putBooking(id, token, data);
        expect(response.statusCode).to.eq(200)
        expect(response.body.firstname).to.eq(firstName);

        Joi.assert(response.body, updateBookingIdSuccessSchema)
    })

})