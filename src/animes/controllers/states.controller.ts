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
import { CreateStateDto, UpdateStateDto } from '../dtos/generic.dto';
import { StatesService } from '../services/states.service';

@Controller('states')
export class StatesController {
  constructor(private service: StatesService) {}

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
  async create(@Body() payload: CreateStateDto) {
    const res = await this.service.create(payload);
    if (!res) throw new NotFoundException();
    return res;
  }

  @Put(':id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateStateDto,
  ) {
    const res = await this.service.update(id, payload);
    if (!res) throw new NotFoundException();
    return res;
  }
}
