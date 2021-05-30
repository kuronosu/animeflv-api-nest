import { FilterQuery, Model, ObjectId } from 'mongoose';

type ID = number | string | ObjectId;

export class ReadOnlyQuerysService<T> {
  constructor(protected model: Model<T>) {}

  async findOneById(id: ID) {
    try {
      const document = await this.model.findById(id).exec();
      if (document) {
        return document;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(query: FilterQuery<T> = {}) {
    return await this.model.find(query).exec();
  }
}

export class GenericQuerysService<
  T,
  CreateDto,
  UpdateDto,
> extends ReadOnlyQuerysService<T> {
  async create(data: CreateDto) {
    return await new this.model(data).save();
  }

  async update(id: ID, data: UpdateDto) {
    return await this.model
      // @ts-ignore : This works, believe me
      .findByIdAndUpdate(id, { $set: data }, { new: true })
      .exec();
  }
}
