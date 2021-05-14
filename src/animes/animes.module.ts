import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnimesController } from './controllers/animes.controller';
import { AnimesService } from './services/animes.service';
import { TypesController } from './controllers/types.controller';
import { TypesService } from './services/types.service';
import { StatesController } from './controllers/states.controller';
import { StatesService } from './services/states.service';
import { GenresController } from './controllers/genres.controller';
import { GenresService } from './services/genres.service';
import { LatestEpisodesController } from './controllers/latest-episodes.controller';
import { LatestEpisodesService } from './services/latest-episodes.service';
import { LatestEpisode, LatestEpisodeSchema } from './entities';
import Type, { TypeSchema } from './entities/type.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LatestEpisode.name,
        schema: LatestEpisodeSchema,
      },
      {
        name: Type.name,
        schema: TypeSchema,
      },
    ]),
  ],
  controllers: [
    AnimesController,
    TypesController,
    StatesController,
    GenresController,
    LatestEpisodesController,
  ],
  providers: [
    AnimesService,
    TypesService,
    StatesService,
    GenresService,
    LatestEpisodesService,
  ],
})
export class AnimesModule {}
