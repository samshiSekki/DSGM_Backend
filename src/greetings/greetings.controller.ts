import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLastGreetingDto } from './create-greeting.dto';
import { GreetingsService } from './greetings.service';
import { LastGreeting } from './lastGreeting.schema';

@Controller('greetings')
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) {}

  @Get()
  getLastGreetings(): Promise<LastGreeting[]> {
    return this.greetingsService.getLastGreetings();
  }

  @Post()
  addLastGreeting(@Body() createLastGreetingDto: CreateLastGreetingDto): Promise<LastGreeting> {
    return this.greetingsService.addLastGreeting(createLastGreetingDto);
  }
}
