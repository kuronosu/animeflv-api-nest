import { Controller, Get } from '@nestjs/common';
import { TypesService } from '../services/types.service';

@Controller('types')
export class TypesController {
  constructor(private service: TypesService) {}

  @Get()
  get() {
    return this.service.findAll();
  }
}
