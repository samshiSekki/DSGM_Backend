import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { GreetingsService } from './greetings.service';
import { LastGreeting } from './schemas/lastGreeting.schema';
import { FirstGreeting } from './schemas/firstGreeting.schema';

@ApiTags('greetings')
@Controller('greetings')
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) {}

  @Get('/last')
  @ApiResponse({ description: '끝인사 조회 API' })
  getLastGreetings(): Promise<LastGreeting[]> {
    return this.greetingsService.getLastGreetings();
  }

  @Post('/last')
  @ApiBody({ type: CreateGreetingDto })
  addLastGreeting(@Body() createLastGreetingDto: CreateGreetingDto): Promise<LastGreeting> {
    return this.greetingsService.addLastGreeting(createLastGreetingDto);
  }

  @Get('/first')
  @ApiResponse({ description: '첫인사 조회 API' })
  getFirstGreetings(): Promise<FirstGreeting[]> {
    return this.greetingsService.getFirstGreetings();
  }

  @Post('/first')
  @ApiBody({ type: CreateGreetingDto })
  addFirstGreeting(@Body() createFirstGreetingDto: CreateGreetingDto): Promise<FirstGreeting> {
    return this.greetingsService.addFirstGreeting(createFirstGreetingDto);
  }
}
