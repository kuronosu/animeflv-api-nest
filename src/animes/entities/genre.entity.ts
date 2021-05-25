import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { transformId } from 'src/common/transforms';

@Schema()
export class Genre {
  @Prop({ type: Number }) _id: number;
  @Prop({ required: true }) name: string;
}

export const GenreSchema = transformId(SchemaFactory.createForClass(Genre));
