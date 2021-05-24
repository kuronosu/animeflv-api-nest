import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class AnimeLatest {
  @Prop({ type: Number }) id: number;
  @Prop({ required: true }) name: string;
}

export const AnimeLatestSchema = SchemaFactory.createForClass(AnimeLatest);

@Schema({ collection: 'latestEpisodes' })
export class LatestEpisode extends Document {
  @Prop({ required: true }) url: string;
  @Prop({ required: true }) image: string;
  @Prop({ required: true }) capi: string;
  @Prop({ type: AnimeLatestSchema }) anime: AnimeLatest;
}

export const LatestEpisodeSchema = SchemaFactory.createForClass(LatestEpisode);

LatestEpisodeSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    delete ret._id;
  },
});
