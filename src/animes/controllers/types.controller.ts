import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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
  async create(@Body() payload: CreateTypeDto) {
    return await this.service.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTypeDto,
  ) {
    return this.service.update(id, payload);
  }
}
