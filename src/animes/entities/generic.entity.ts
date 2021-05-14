import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export default class Generic extends Document {
  @Prop({ type: Number }) _id: number;
  @Prop({ required: true }) name: string;
}
