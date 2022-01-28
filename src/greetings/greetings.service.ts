import { Injectable } from '@nestjs/common';
import { GreetingsRepository } from './greetings.repository';
import { LastGreeting } from './lastGreeting.schema';

@Injectable()
export class GreetingsService {
  constructor(private readonly greetingsRepository: GreetingsRepository) {}

  async getLastGreetings(): Promise<LastGreeting[]> {
    return this.greetingsRepository.findAllLastGreetings();
  }

  async addLastGreeting(createLastGreetingDto): Promise<LastGreeting> {
    return this.greetingsRepository.saveLastGreetings(createLastGreetingDto);
  }
}
