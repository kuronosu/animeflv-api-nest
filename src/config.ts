import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export default registerAs('config', () => {
  return {
    mongo: {
      host: process.env.MONGO_HOST,
      port: process.env.MONGO_PORT,
      name: process.env.MONGO_DB,
      connection: process.env.MONGO_CONNECTION,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    },
    tokenValue: process.env.TOKEN_VALUE,
  };
});

export const validationSchema = Joi.object({
  MONGO_HOST: Joi.string().required(),
  MONGO_PORT: Joi.number().required(),
  MONGO_DB: Joi.string().required(),
  MONGO_CONNECTION: Joi.string().required(),
  MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
  MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
  TOKEN_VALUE: Joi.string(),
});
