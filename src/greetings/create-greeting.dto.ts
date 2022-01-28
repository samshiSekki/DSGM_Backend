import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLastGreetingDto {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  greeting: string;
}
