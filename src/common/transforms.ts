import { Schema } from 'mongoose';

export function transformId(schema: Schema) {
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
