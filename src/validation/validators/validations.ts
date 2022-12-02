import Joi from 'joi'

export const validateLoginData = (login: { email: string; password: string }) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(36).required(),
  })

  return loginSchema.validate(login)
}
