import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { MongoExceptionFilter } from 'src/common/mongo-exception-filter';
import { CreateTypeDto, UpdateTypeDto } from '../dtos/generic.dto';
import { TypesService } from '../services/types.service';

@Controller('types')
export class TypesController {
  constructor(private service: TypesService) {}

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
  async create(@Body() payload: CreateTypeDto) {
    const res = await this.service.create(payload);
    if (!res) throw new NotFoundException();
    return res;
  }

  @Put(':id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTypeDto,
  ) {
    const res = await this.service.update(id, payload);
    if (!res) throw new NotFoundException();
    return res;
  }
}
