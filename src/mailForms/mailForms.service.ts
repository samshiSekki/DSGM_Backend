import { Injectable } from '@nestjs/common';
import { MailFormsRepository } from './mailForms.repository';
import { LastGreeting } from './schemas/lastGreeting.schema';
import { FirstGreeting } from './schemas/firstGreeting.schema';
import { Content } from './schemas/content.schema';

@Injectable()
export class MailFormsService {
  constructor(private readonly mailFormsRepository: MailFormsRepository) {}

  async getFirstGreetings(): Promise<FirstGreeting[]> {
    return this.mailFormsRepository.findAllFirstGreetings();
  }

  async addFirstGreeting(createFirstGreetingDto): Promise<FirstGreeting> {
    return this.mailFormsRepository.saveFirstGreeting(createFirstGreetingDto);
  }

  async getContents(): Promise<Content[]> {
    return this.mailFormsRepository.findAllContents();
  }

  async addContent(createContentDto): Promise<Content> {
    return this.mailFormsRepository.saveContent(createContentDto);
  }

  async getLastGreetings(): Promise<LastGreeting[]> {
    return this.mailFormsRepository.findAllLastGreetings();
  }

  async addLastGreeting(createLastGreetingDto): Promise<LastGreeting> {
    return this.mailFormsRepository.saveLastGreeting(createLastGreetingDto);
  }
}
