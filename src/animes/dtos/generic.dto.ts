import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class CreateGenericDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

class UpdateGenericDto extends PartialType(CreateGenericDto) {}

export class CreateTypeDto extends CreateGenericDto {}
export class UpdateTypeDto extends UpdateGenericDto {}

export class CreateStateDto extends CreateGenericDto {}
export class UpdateStateDto extends UpdateGenericDto {}

export class CreateGenreDto extends CreateGenericDto {}
export class UpdateGenreDto extends UpdateGenericDto {}
