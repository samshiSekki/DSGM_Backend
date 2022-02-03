import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSuggestionDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, default: 'type', description: '분류용 카테고리' })
  type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, default: '교수님 안녕하세요', description: '제안멘트' })
  suggestion: string;
}
