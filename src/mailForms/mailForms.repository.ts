import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContentDto } from './dto/create-content.dto';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { Content, ContentsDocument } from './schemas/content.schema';
import { FirstGreeting, FirstGreetingsDocument } from './schemas/firstGreeting.schema';
import { LastGreeting, LastGreetingsDocument } from './schemas/lastGreeting.schema';
import { Suggestion } from './schemas/suggestion.schema';

export class MailFormsRepository {
  constructor(
    @InjectModel(LastGreeting.name)
      private LastGreetingModel: Model<LastGreetingsDocument>,
    @InjectModel(FirstGreeting.name)
      private FirstGreetingModel: Model<FirstGreetingsDocument>,
    @InjectModel(Content.name)
      private ContentModel: Model<ContentsDocument>,
    @InjectModel(Suggestion.name)
      private SuggestionModel: Model<Suggestion>,
  ) {}

  async findAllFirstGreetings(): Promise<FirstGreeting[]> {
    return this.FirstGreetingModel.find();
  }

  async saveFirstGreeting(createFirstGreetingDto: CreateGreetingDto): Promise<FirstGreeting> {
    const firstGreeting = new this.FirstGreetingModel(createFirstGreetingDto);
    return firstGreeting.save();
  }

  async findAllContents(): Promise<Content[]> {
    return this.ContentModel.find();
  }

  async findAllContentsByCategory(category: string): Promise<Content[]> {
    return await this.ContentModel.find({type: category});
  }

  async saveContent(createContentDto: CreateContentDto): Promise<Content> {
    const content = new this.ContentModel(createContentDto);
    return content.save();
  }

  async findAllLastGreetings(): Promise<LastGreeting[]> {
    return this.LastGreetingModel.find();
  }

  async findAllLastGreetingsByCategory(category: string): Promise<LastGreeting[]> {
    return this.LastGreetingModel.find({type: category});
  }

  async saveLastGreeting(createLastGreetingDto: CreateGreetingDto): Promise<LastGreeting> {
    const lastGreeting = new this.LastGreetingModel(createLastGreetingDto);
    return lastGreeting.save();
  }

  async suggestGreeting(createSuggestionDto): Promise<Suggestion> {
    const suggestion = new this.SuggestionModel(createSuggestionDto);
    return suggestion.save();
  }
}
