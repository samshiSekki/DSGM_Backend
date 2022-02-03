import { Injectable } from '@nestjs/common';
import { MailFormsRepository } from './mailForms.repository';
import { LastGreeting } from './schemas/lastGreeting.schema';
import { FirstGreeting } from './schemas/firstGreeting.schema';
import { Content } from './schemas/content.schema';
import { Suggestion } from './schemas/suggestion.schema';

@Injectable()
export class MailFormsService {
  constructor(private readonly mailFormsRepository: MailFormsRepository) {}

  async addFirstGreeting(createFirstGreetingDto): Promise<FirstGreeting> {
    return this.mailFormsRepository.saveFirstGreeting(createFirstGreetingDto);
  }

  async getFirstGreetings(): Promise<FirstGreeting[]> {
    return this.mailFormsRepository.findAllFirstGreetings();
  }

  async getFirstGreetingsByCategory(category: string): Promise<FirstGreeting[]> {
    return this.mailFormsRepository.findAllFirstGreetingsByCategory(category);
  }

  async getContents(): Promise<Content[]> {
    return this.mailFormsRepository.findAllContents();
  }

  async getContentsByCategory(category: string): Promise<Content[]> {
    return this.mailFormsRepository.findAllContentsByCategory(category);
  }

  async addContent(createContentDto): Promise<Content> {
    return this.mailFormsRepository.saveContent(createContentDto);
  }

  async getLastGreetings(): Promise<LastGreeting[]> {
    return this.mailFormsRepository.findAllLastGreetings();
  }

  async getLastGreetingsByCategory(category: string): Promise<LastGreeting[]> {
    return this.mailFormsRepository.findAllLastGreetingsByCategory(category);
  }

  async addLastGreeting(createLastGreetingDto): Promise<LastGreeting> {
    return this.mailFormsRepository.saveLastGreeting(createLastGreetingDto);
  }

  async suggestGreeting(createSuggestionDto): Promise<Suggestion> {
    return this.mailFormsRepository.suggestGreeting(createSuggestionDto);
  }
}
