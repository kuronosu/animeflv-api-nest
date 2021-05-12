import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { LatestEpisodesService } from '../services/latest-episodes.service';

@Controller('latest')
export class LatestEpisodesController {
  constructor(private service: LatestEpisodesService) {}

  @Get()
  get() {
    return this.service.findAll();
  }

  @Get(':index')
  getOne(@Param('index', ParseIntPipe) index: number) {
    if (index < 0 || index > 19)
      throw new NotFoundException(`Latest episode #${index} not found`);
    return this.service.findOne(index);
  }
}
