import { Schema, SchemaFactory } from '@nestjs/mongoose';
import Generic from './generic.entity';

@Schema()
export class Genre extends Generic {}

export const GenreSchema = SchemaFactory.createForClass(Genre);
