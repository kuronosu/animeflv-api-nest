import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReadOnlyQuerysService } from 'src/animes/services/generic.service';
import { CreateAnimeDto, UpdateAnimeDto } from '../dtos/anime.dto';
import { Anime, Genre, State, Type } from '../entities';

@Injectable()
export class AnimesService extends ReadOnlyQuerysService<Anime> {
  constructor(
    @InjectModel(Anime.name) model: Model<Anime>,
    @InjectModel(State.name) private stateModel: Model<Anime>,
    @InjectModel(Type.name) private typeModel: Model<Anime>,
    @InjectModel(Genre.name) private genreModel: Model<Anime>,
  ) {
    super(model);
  }

  async findAllPopulated(query = {}) {
    return await this.model
      .find(query)
      .populate(['type', 'state', 'genres'])
      .exec();
  }

  async verifyAndCreate(
    data: CreateAnimeDto,
  ): Promise<[Anime | null, String | null]> {
    const anime = new this.model(data);
    if (!(await this.stateModel.exists({ _id: anime.state })))
      return [null, 'State not exists'];
    if (!(await this.typeModel.exists({ _id: anime.type })))
      return [null, 'Type not exists'];
    const query = this.genreModel
      .countDocuments({ _id: { $in: anime.genres } })
      .lean();
    if ((await query.exec()) !== anime.genres.length)
      return [null, 'Some genre is invalid'];
    return [await anime.save(), null];
  }
}
