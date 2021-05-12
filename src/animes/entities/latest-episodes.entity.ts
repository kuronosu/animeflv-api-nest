import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import Generic from './generic.entity';

export class AnimeLatest extends Generic {}
export const AnimeLatestSchema = SchemaFactory.createForClass(AnimeLatest);

@Schema({ collection: 'latestEpisodes' })
export class LatestEpisode extends Document {
  @Prop({ required: true }) url: string;
  @Prop({ required: true }) image: string;
  @Prop({ required: true }) capi: string;
  @Prop({ type: AnimeLatestSchema, required: true }) anime: AnimeLatest;
}

export const LatestEpisodeSchema = SchemaFactory.createForClass(LatestEpisode);
