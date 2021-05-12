import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export default registerAs('config', () => {
  return {
    database: {
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      name: process.env.DATABASE_NAME,
    },
    tokenValue: process.env.TOKEN_VALUE,
  };
});

export const validationSchema = Joi.object({
  TOKEN_VALUE: Joi.string(),
  DATABASE_USERNAME: Joi.string(),
  DATABASE_PASSWORD: Joi.string(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number(),
  DATABASE_NAME: Joi.string().required(),
});
