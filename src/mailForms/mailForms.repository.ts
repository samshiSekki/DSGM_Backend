import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { FirstGreeting, FirstGreetingsDocument } from './schemas/firstGreeting.schema';
import { LastGreeting, LastGreetingsDocument } from './schemas/lastGreeting.schema';
import { Suggestion } from './schemas/suggestion.schema';

export class MailFormsRepository {
  constructor(
    @InjectModel(LastGreeting.name)
    private LastGreetingModel: Model<LastGreetingsDocument>,
    @InjectModel(FirstGreeting.name)
    private FirstGreetingModel: Model<FirstGreetingsDocument>,
    @InjectModel(Suggestion.name)
    private SuggestionModel: Model<Suggestion>,
  ) {}

  async findAllFirstGreetings(): Promise<FirstGreeting[]> {
    return this.FirstGreetingModel.find();
  }

  async findAllFirstGreetingsByCategory(category: string): Promise<FirstGreeting[]> {
    return this.FirstGreetingModel.find({ type: category });
  }

  async saveFirstGreeting(createFirstGreetingDto: CreateGreetingDto): Promise<FirstGreeting> {
    const firstGreeting = new this.FirstGreetingModel(createFirstGreetingDto);
    return firstGreeting.save();
  }

  async findAllLastGreetings(): Promise<LastGreeting[]> {
    return this.LastGreetingModel.find();
  }

  async findAllLastGreetingsByCategory(category: string): Promise<LastGreeting[]> {
    return this.LastGreetingModel.find({ type: category });
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
