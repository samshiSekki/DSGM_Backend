import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuggestionDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  suggestion: string;
}
