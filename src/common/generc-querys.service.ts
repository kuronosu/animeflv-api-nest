import { NotFoundException } from '@nestjs/common';
import { FilterQuery, Model, ObjectId } from 'mongoose';

export class ReadOnlyGenericQuerysService<T> {
  constructor(protected model: Model<T>) {}

  async findOneById(id: number | string | ObjectId) {
    try {
      const document = await this.model.findById(id).exec();
      if (document) {
        return document;
      }
    } catch (error) {}
    throw new NotFoundException();
  }

  async findAll(query: FilterQuery<T> = {}) {
    return await this.model.find(query).exec();
  }
}

export class GenericQuerysService<
  T,
  CreateDto,
  UpdateDto,
> extends ReadOnlyGenericQuerysService<T> {
  async create(data: CreateDto) {
    const newDocument = new this.model(data);
    return await newDocument.save();
  }

  update(data: UpdateDto) {}

  async findAll(query = {}) {
    return await this.model.find(query).exec();
  }
}
