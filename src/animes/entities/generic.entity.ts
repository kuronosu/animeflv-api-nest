import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export default class Generic extends Document {
  @Prop({ type: Number }) _id: number;
  @Prop({ required: true }) name: string;
}
