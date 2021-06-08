import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class RelationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  relation: string;
}

export class EpisodeDto {
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  number: number;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  eid: number;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  img: string;
}

export class CreateAnimeDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  readonly flvid: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly slug: string;

  @IsString()
  @IsOptional()
  readonly nextEpisodeDate: string | null;

  @IsString()
  @IsNotEmpty()
  readonly url: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  readonly state: Number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  readonly type: Number;

  @IsNotEmpty()
  @IsArray()
  @Type(() => Number)
  @IsInt({ each: true })
  @Min(0, { each: true })
  readonly genres: number[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly otherNames: string[];

  @IsString()
  readonly synopsis: string;

  @IsNotEmpty()
  @IsNumber()
  readonly score: number;

  @IsInt()
  @IsNotEmpty()
  readonly votes: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelationDto)
  readonly relations: RelationDto[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EpisodeDto)
  readonly episodes: EpisodeDto[];
}

export class UpdateAnimeDto extends PartialType(CreateAnimeDto) {}
