import { NotFoundException } from '@nestjs/common';
import { FilterQuery, Model, ObjectId } from 'mongoose';

type ID = number | string | ObjectId;

export class ReadOnlyGenericQuerysService<T> {
  constructor(protected model: Model<T>) {}

  async findOneById(id: ID) {
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

  async update(id: ID, data: UpdateDto) {
    const doc = await this.model
      // @ts-ignore
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .exec();
    if (!doc) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return doc;
  }
}
