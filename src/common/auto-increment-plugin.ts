import { getConnectionToken } from '@nestjs/mongoose';
import { Connection, Schema } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';

export const withAutoIncrementIdPlugin = (
  cls: Function,
  schema: Schema<any>,
) => ({
  name: cls.name,
  useFactory: async (connection: Connection) => {
    const AutoIncrement = AutoIncrementFactory(connection);
    schema.plugin(AutoIncrement, {
      id: `${cls.name}_id_seq`,
      start_seq: 0,
    });
    return schema;
  },
  inject: [getConnectionToken()],
});
