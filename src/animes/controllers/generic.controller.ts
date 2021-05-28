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

import { CreateGenericDto, UpdateGenericDto } from '../dtos/generic.dto';
import { MongoExceptionFilter } from '../../common/mongo-exception-filter';
import {
  GenericQuerysService,
  ReadOnlyQuerysService,
} from '../services/generic.service';

export class ReadOnlyEntityController<Entity> {
  constructor(protected service: ReadOnlyQuerysService<Entity>) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const doc = await this.service.findOneById(id);
    if (!doc) throw new NotFoundException();
    return doc;
  }
}

export class GenricEntityController<
  Entity,
  Service extends GenericQuerysService<
    Entity,
    CreateGenericDto,
    UpdateGenericDto
  >,
> extends ReadOnlyEntityController<Entity> {
  constructor(protected service: Service) {
    super(service);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() payload: CreateGenericDto) {
    return await this.service.create(payload);
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
