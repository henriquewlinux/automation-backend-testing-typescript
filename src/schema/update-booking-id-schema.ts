import Joi = require('joi');

export const updateBookingIdSuccessSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    totalprice: [Joi.string(), Joi.number()],
    depositpaid: [Joi.string(), Joi.bool()],
    bookingdates: Joi.object({
        checkin: [Joi.string(), Joi.date()],
        checkout: [Joi.string(), Joi.date()]
    }),
    additionalneeds: Joi.string().required()
})
