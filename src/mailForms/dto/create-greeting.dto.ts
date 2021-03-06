import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGreetingDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  greeting: string;
}
