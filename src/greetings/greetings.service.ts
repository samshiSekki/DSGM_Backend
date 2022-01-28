import { Injectable } from '@nestjs/common';
import { GreetingsRepository } from './greetings.repository';
import { LastGreeting } from './schemas/lastGreeting.schema';
import { FirstGreeting } from './schemas/firstGreeting.schema';

@Injectable()
export class GreetingsService {
  constructor(private readonly greetingsRepository: GreetingsRepository) {}

  async getLastGreetings(): Promise<LastGreeting[]> {
    return this.greetingsRepository.findAllLastGreetings();
  }

  async addLastGreeting(createLastGreetingDto): Promise<LastGreeting> {
    return this.greetingsRepository.saveLastGreetings(createLastGreetingDto);
  }

  async getFirstGreetings(): Promise<FirstGreeting[]> {
    return this.greetingsRepository.findAllFirstGreetings();
  }

  async addFirstGreeting(createFirstGreetingDto): Promise<FirstGreeting> {
    return this.greetingsRepository.saveFirstGreetings(createFirstGreetingDto);
  }
}
