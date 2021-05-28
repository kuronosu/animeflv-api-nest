import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { transformId } from 'src/common/transforms';

@Schema({ _id: false })
export class State extends Document {
  @Prop({ type: Number }) _id: number;
  @Prop({ required: true, unique: true }) name: string;
}

export const StateSchema = transformId(SchemaFactory.createForClass(State));
