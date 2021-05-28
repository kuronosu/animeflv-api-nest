import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateLatestEpisodeAnimeDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateLatestEpisodeAnimeDto extends PartialType(
  CreateLatestEpisodeAnimeDto,
) {}

export class CreateLatestEpisodeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly capi: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateLatestEpisodeAnimeDto)
  readonly anime: CreateLatestEpisodeAnimeDto;
}

export class UpdateLatestEpisodeDto extends PartialType(
  CreateLatestEpisodeDto,
) {}
