import { postCreateBooking } from "../routes/booking/post-create-booking-route";
import { expect } from "chai";
import Joi = require('joi');
const schema = require('../schema/create-booking-schema');
import * as test_data from '../data/test_data.json'

let response: any;

describe('Tests Create Booking', async () => {
    it('Verify create bookin success', async () =>{

        const data = test_data.requestBody.createBookin
        data.firstname = "Tom"
        
        response = await postCreateBooking(data);
        expect(response.statusCode).to.eq(200);
        expect(response.body.booking.firstname).to.eq('Tom');

        Joi.assert(response.body, schema.createBookingSuccessSchema)
    })

})