import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericQuerysService } from 'src/common/generc-querys.service';
import { CreateGenericDto, UpdateGenericDto } from '../dtos/generic.dto';
import { State } from '../entities';

@Injectable()
export class StatesService extends GenericQuerysService<
  State,
  CreateGenericDto,
  UpdateGenericDto
> {
  constructor(@InjectModel(State.name) model: Model<State>) {
    super(model);
  }
}
