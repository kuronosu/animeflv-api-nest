import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    switch (exception.code) {
      case 11000:
        const key = exception?.message?.split('{ ')[1]?.split(':')[0].trim();
        return response
          .status(HttpStatus.UNPROCESSABLE_ENTITY)
          .json(
            HttpException.createBody(
              `Duplicate key${key ? ': ' + key : ''}`,
              'Unprocessable Entity',
              HttpStatus.UNPROCESSABLE_ENTITY,
            ),
          );
    }
    return response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json(
        HttpException.createBody(
          `Unexpected mongo error`,
          'Internal Server Error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
      );
  }
}
