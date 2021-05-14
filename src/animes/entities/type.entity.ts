import { Schema, SchemaFactory } from '@nestjs/mongoose';
import Generic from './generic.entity';

@Schema()
export default class Type extends Generic {}

export const TypeSchema = SchemaFactory.createForClass(Type);
