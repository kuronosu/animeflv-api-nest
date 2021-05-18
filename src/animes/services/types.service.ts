import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import GenericQuerysService from 'src/utils/generc-querys.service';
import { Type } from '../entities';

@Injectable()
export class TypesService extends GenericQuerysService<Type> {
  constructor(@InjectModel(Type.name) model: Model<Type>) {
    super(model);
  }
}
