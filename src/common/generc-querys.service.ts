import { NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

export default class GenericQuerysService<T> {
  constructor(protected model: Model<T>) {}

  async findOneById(id: string) {
    const document = await this.model.findById(id).exec();
    if (!document) {
      throw new NotFoundException();
    }
    return document;
  }

  async findAll(query = {}) {
    return await this.model.find(query).exec();
  }
}
