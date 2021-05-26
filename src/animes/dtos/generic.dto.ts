import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenericDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateGenericDto extends PartialType(CreateGenericDto) {}
