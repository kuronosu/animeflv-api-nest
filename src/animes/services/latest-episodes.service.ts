import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import GenericQuerysService from 'src/utils/generc-querys.service';
import { AnimeLatest, LatestEpisode } from '../entities';

@Injectable()
export class LatestEpisodesService extends GenericQuerysService<LatestEpisode> {
  constructor(@InjectModel(LatestEpisode.name) model: Model<LatestEpisode>) {
    super(model);
  }

  async findOne(index: number) {
    const episode = (await this.model.find().exec())[index];
    if (!episode) {
      throw new NotFoundException(`Latest episode #${index} not found`);
    }
    return episode;
  }
}
