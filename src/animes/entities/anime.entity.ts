export class Relation {
  name: string;
  uRL: string;
  relation: string;
}

export class Episode {
  number: number;
  eid: number;
  url: string;
  image: string;
}

export default class Anime {
  flvid: number;
  name: string;
  slug: string;
  nextEpisodeDate: string;
  url: string;
  state: number;
  type: number;
  genres: number[];
  otherNames: string[];
  synopsis: string;
  score: number;
  votes: number;
  cover: string;
  banner: string;
  relations: Relation[];
  episodes: Episode[];
}
