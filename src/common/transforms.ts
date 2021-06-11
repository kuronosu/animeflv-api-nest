import { Schema } from 'mongoose';

export function transformId(schema: Schema, numericId = true) {
  schema.virtual('id').get(function () {
    return numericId ? parseInt(this._id) : `${this._id}`;
  });
  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any) {
      delete ret._id;
    },
  });
  return schema;
}

export function hideId(schema: Schema) {
  schema.set('toJSON', {
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    },
  });
  return schema;
}
