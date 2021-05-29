import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericQuerysService } from './generic.service';
import { LatestEpisode } from '../entities';
import {
  CreateLatestEpisodeDto,
  UpdateLatestEpisodeDto,
} from '../dtos/latest.dto';
import { MongoError } from 'mongodb';

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

  async bulkCreate(payload: CreateLatestEpisodeDto[]) {
    const { ok, deletedCount } = await this.model.deleteMany().exec();
    if (!ok)
      throw new MongoError('Could not delete the previous latest episodes');
    return await this.model.insertMany(payload);
  }
}
