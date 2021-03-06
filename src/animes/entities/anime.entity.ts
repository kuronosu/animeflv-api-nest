import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

import { Type } from './type.entity';
import { State } from './state.entity';
import { Genre } from './genre.entity';
import { hideId } from 'src/common/transforms';

@Schema()
export class Relation {
  @Prop() name: string;
  @Prop() url: string;
  @Prop() relation: string;
}
export const RelationSchema = SchemaFactory.createForClass(Relation);

@Schema()
export class Episode {
  @Prop() number: number;
  @Prop() eid: number;
  @Prop() url: string;
  @Prop() image: string;
}
export const EpisodeSchema = SchemaFactory.createForClass(Episode);

@Schema()
export class Anime extends Document {
  @Prop({ required: true, index: true, unique: true, type: Number })
  flvid: number;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  slug: string;
  @Prop({ name: 'nextepisodedate', required: false })
  nextEpisodeDate: string;
  @Prop({ required: true })
  url: string;
  @Prop({ type: Number, ref: State.name, min: 0 })
  state: State | number;
  @Prop({ type: Number, ref: Type.name, min: 0 })
  type: Type | number;
  @Prop({ type: [{ type: Number, ref: Genre.name }] })
  genres: Types.Array<Genre>;
  @Prop()
  otherNames: string[];
  @Prop()
  synopsis: string;
  @Prop()
  score: number;
  @Prop()
  votes: number;
  // cover: string;  "/uploads/animes/covers/<flvid>.jpg"
  // banner: string; "/uploads/animes/banners/<flvid>.jpg"
  @Prop({ type: [RelationSchema] })
  relations: Types.Array<Relation>;
  @Prop({ type: [EpisodeSchema] })
  episodes: Types.Array<Episode>;
}

export const AnimeSchema = hideId(SchemaFactory.createForClass(Anime));
