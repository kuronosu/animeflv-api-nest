import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericQuerysService } from './generic.service';
import { LatestEpisode } from '../entities';
import {
  CreateLatestEpisodeDto,
  UpdateLatestEpisodeDto,
} from '../dtos/latest.dto';

@Injectable()
export class LatestEpisodesService extends GenericQuerysService<
  LatestEpisode,
  CreateLatestEpisodeDto,
  UpdateLatestEpisodeDto
> {
  constructor(@InjectModel(LatestEpisode.name) model: Model<LatestEpisode>) {
    super(model);
  }

  async findOneByIndex(index: number) {
    return (await this.findAll())[index];
  }
}
