import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericQuerysService } from 'src/common/generc-querys.service';
import { CreateTypeDto, UpdateTypeDto } from '../dtos/generic.dto';
import { Type } from '../entities';

@Injectable()
export class TypesService extends GenericQuerysService<
  Type,
  CreateTypeDto,
  UpdateTypeDto
> {
  constructor(@InjectModel(Type.name) model: Model<Type>) {
    super(model);
  }
}
