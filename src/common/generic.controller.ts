import {
  Body,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';

import { CreateGenericDto, UpdateGenericDto } from '../animes/dtos/generic.dto';
import { MongoExceptionFilter } from './mongo-exception-filter';
import { GenericQuerysService } from './generc-querys.service';

export class GenricEntityController<
  GenericEntity,
  Service extends GenericQuerysService<
    GenericEntity,
    CreateGenericDto,
    UpdateGenericDto
  >,
> {
  constructor(protected service: Service) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOneById(id);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() payload: CreateGenericDto) {
    const res = await this.service.create(payload);
    if (!res) throw new NotFoundException();
    return res;
  }

  @Put(':id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateGenericDto,
  ) {
    const res = await this.service.update(id, payload);
    if (!res) throw new NotFoundException();
    return res;
  }
}
