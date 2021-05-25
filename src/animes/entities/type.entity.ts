import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { transformId } from 'src/common/transforms';

@Schema()
export class Type {
  @Prop({ type: Number }) _id: number;
  @Prop({ required: true }) name: string;
}

export const TypeSchema = transformId(SchemaFactory.createForClass(Type));
