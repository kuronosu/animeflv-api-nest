import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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
  create(@Body() payload: CreateStateDto) {
    return this.service.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateStateDto,
  ) {
    return this.service.update(id, payload);
  }
}
