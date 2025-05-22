import Joi = require('joi');

const getBookingSuccessSchema = Joi.object({
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

module.exports = {getBookingSuccessSchema};