import { Model } from 'mongoose';

export default class GenericQuerysService<T> {
  constructor(protected model: Model<T>) {}

  findAll() {
    return this.model.find().exec();
  }
}
