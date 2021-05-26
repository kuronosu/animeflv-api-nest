import { Controller } from '@nestjs/common';

import { GenricEntityController } from 'src/animes/controllers/generic.controller';
import { Type } from '../entities';
import { TypesService } from '../services/types.service';

@Controller('types')
export class TypesController extends GenricEntityController<Type, TypesService> {
  constructor(service: TypesService) {
    super(service);
  }
}
