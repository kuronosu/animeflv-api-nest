import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { transformId } from 'src/common/transforms';

@Schema({ _id: false })
export class State {
  @Prop({ type: Number }) _id: number;
  @Prop({ required: true }) name: string;
}

export const StateSchema = transformId(SchemaFactory.createForClass(State));
