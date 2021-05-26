import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericQuerysService } from 'src/common/generc-querys.service';
import { CreateGenericDto, UpdateGenericDto } from '../dtos/generic.dto';
import { Genre } from '../entities';

@Injectable()
export class GenresService extends GenericQuerysService<
  Genre,
  CreateGenericDto,
  UpdateGenericDto
> {
  constructor(@InjectModel(Genre.name) model: Model<Genre>) {
    super(model);
  }
}
