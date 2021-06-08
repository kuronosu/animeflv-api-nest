import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { MongoExceptionFilter } from 'src/common/mongo-exception-filter';
import { CreateAnimeDto } from '../dtos/anime.dto';
import { AnimesService } from '../services/animes.service';

@Controller('animes')
export class AnimesController {
  constructor(private service: AnimesService) {}

  @Get()
  async get(@Query('deep') deep = 'true') {
    const results = await (deep == 'true'
      ? this.service.findAllPopulated({ flvid: 3453 })
      : this.service.findAll({ flvid: 3453 }));
    return results[0];
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() payload: CreateAnimeDto) {
    const [anime, error] = await this.service.verifyAndCreate(payload);
    if (error !== null) throw new BadRequestException(error);
    return anime;
  }
}
