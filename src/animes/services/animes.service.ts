import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import GenericQuerysService from 'src/common/generc-querys.service';
import { Anime } from '../entities';

@Injectable()
export class AnimesService extends GenericQuerysService<Anime> {
  constructor(@InjectModel(Anime.name) model: Model<Anime>) {
    super(model);
  }

  async findAllPopulated(query = {}) {
    return await this.model
      .find(query)
      .populate(['type', 'state', 'genres'])
      .exec();
  }
}
