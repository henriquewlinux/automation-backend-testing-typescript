import Joi = require('joi');

const loginSuccessSchema = Joi.object({
    token: [Joi.string(), Joi.number()],
})

const loginFailSchema = Joi.object({
    reason: Joi.string().required()
})

module.exports = { loginFailSchema, loginSuccessSchema};