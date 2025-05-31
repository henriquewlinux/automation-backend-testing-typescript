import Joi from 'joi'

export const loginSuccessSchema = Joi.object({
    token: [Joi.string(), Joi.number()],
})

export const loginFailSchema = Joi.object({
    reason: Joi.string().required()
})
