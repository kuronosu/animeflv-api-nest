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

import { ReadOnlyEntityController } from './generic.controller';
import { LatestEpisode } from '../entities';
import { LatestEpisodesService } from '../services/latest-episodes.service';
import {
  CreateLatestEpisodeDto,
  UpdateLatestEpisodeDto,
} from '../dtos/latest.dto';
import { MongoExceptionFilter } from 'src/common/mongo-exception-filter';

@Controller('latest')
export class LatestEpisodesController extends ReadOnlyEntityController<LatestEpisode> {
  constructor(protected service: LatestEpisodesService) {
    super(service);
  }

  @Get(':index')
  async getOne(@Param('index', ParseIntPipe) index: number) {
    if (index < 0 || index > 19)
      throw new NotFoundException(`Index #${index} not valid`);
    const episode = await this.service.findOneByIndex(index);
    if (!episode)
      throw new NotFoundException(`Latest episode #${index} not found`);
    return episode;
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async create(@Body() payload: CreateLatestEpisodeDto) {
    return await this.service.create(payload);
  }

/*
  @Put(':id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateLatestEpisodeDto,
  ) {
    const res = await this.service.update(id, payload);
    if (!res) throw new NotFoundException();
    return res;
  }
*/
}
