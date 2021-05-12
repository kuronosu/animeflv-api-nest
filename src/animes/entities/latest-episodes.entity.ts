import Generic from './generic.entity';

export class AnimeLatest extends Generic {}

export default class LatestEpisode {
  url: string;
  image: string;
  capi: string;
  anime: AnimeLatest;
}
