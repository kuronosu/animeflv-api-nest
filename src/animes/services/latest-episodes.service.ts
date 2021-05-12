import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimeLatest, LatestEpisode } from '../entities';

@Injectable()
export class LatestEpisodesService {
  constructor(
    @InjectModel(LatestEpisode.name)
    private latestEpisodeModel: Model<LatestEpisode>,
  ) {}

  findAll() {
    return this.latestEpisodeModel.find().exec();
  }

  async findOne(index: number) {
    const episode = (await this.latestEpisodeModel.find().exec())[index];
    if (!episode) {
      throw new NotFoundException(`Latest episode #${index} not found`);
    }
    return episode;
  }
}
