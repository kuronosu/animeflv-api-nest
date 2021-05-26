import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericQuerysService } from 'src/common/generc-querys.service';
import { CreateStateDto, UpdateStateDto } from '../dtos/generic.dto';
import { State } from '../entities';

@Injectable()
export class StatesService extends GenericQuerysService<
  State,
  CreateStateDto,
  UpdateStateDto
> {
  constructor(@InjectModel(State.name) model: Model<State>) {
    super(model);
  }
}
