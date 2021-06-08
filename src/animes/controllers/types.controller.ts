import { Body, Controller, Post, UseFilters } from '@nestjs/common';

import { MongoExceptionFilter } from 'src/common/mongo-exception-filter';
import { CreateGenericDto } from '../dtos/generic.dto';
import { Type } from '../entities';
import { TypesService } from '../services/types.service';
import { GenricEntityController } from './generic.controller';

@Controller('types')
export class TypesController extends GenricEntityController<
  Type,
  TypesService
> {
  constructor(service: TypesService) {
    super(service);
  }
}
