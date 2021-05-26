import { Controller } from '@nestjs/common';

import { GenricEntityController } from 'src/animes/controllers/generic.controller';
import { GenresService } from '../services/genres.service';
import { Genre } from '../entities';

@Controller('genres')
export class GenresController extends GenricEntityController<
  Genre,
  GenresService
> {
  constructor(service: GenresService) {
    super(service);
  }
}
