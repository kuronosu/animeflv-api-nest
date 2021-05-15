import { Schema, SchemaFactory } from '@nestjs/mongoose';
import Generic from './generic.entity';

@Schema()
export class State extends Generic {}

export const StateSchema = SchemaFactory.createForClass(State);
