import { Controller, Get, ParseBoolPipe, Query } from '@nestjs/common';
import { boolean } from 'joi';
import { AnimesService } from '../services/animes.service';

@Controller('animes')
export class AnimesController {
  constructor(private service: AnimesService) {}

  @Get()
  async get(@Query('deep') deep: string = "true") {
    const results = await (deep == "true"
      ? this.service.findAllPopulated({flvid: 3453})
      : this.service.findAll({flvid: 3453}));
    return results[0];
  }
}
