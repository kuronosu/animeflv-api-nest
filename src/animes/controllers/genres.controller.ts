import { Controller } from '@nestjs/common';

import { GenricEntityController } from 'src/common/generic.controller';
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
