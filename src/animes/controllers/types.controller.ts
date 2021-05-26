import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateTypeDto } from '../dtos/generic.dto';
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
  async create(@Body() payload: CreateTypeDto) {
    return await this.service.create(payload);
  }
}
