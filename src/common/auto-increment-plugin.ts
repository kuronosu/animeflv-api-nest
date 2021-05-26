import { getConnectionToken } from '@nestjs/mongoose';
import { Connection, Schema } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';

export const withAutoIncrementIdPlugin = (
  name: string,
  schema: Schema<any>,
) => ({
  name: name,
  useFactory: async (connection: Connection) => {
    const AutoIncrement = AutoIncrementFactory(connection);
    schema.plugin(AutoIncrement, {
      id: `${name}_id_seq`,
      start_seq: 0,
    });
    return schema;
  },
  inject: [getConnectionToken()],
});
