import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { FirstGreeting, FirstGreetingsDocument } from './schemas/firstGreeting.schema';
import { LastGreeting, LastGreetingsDocument } from './schemas/lastGreeting.schema';

export class GreetingsRepository {
  constructor(
    @InjectModel(LastGreeting.name)
    private LastGreetingModel: Model<LastGreetingsDocument>,
    @InjectModel(FirstGreeting.name)
    private FirstGreetingModel: Model<FirstGreetingsDocument>,
  ) {}

  async findAllLastGreetings(): Promise<LastGreeting[]> {
    return this.LastGreetingModel.find();
  }

  async saveLastGreetings(createLastGreetingDto: CreateGreetingDto): Promise<LastGreeting> {
    const lastGreeting = new this.LastGreetingModel(createLastGreetingDto);
    return lastGreeting.save();
  }

  async findAllFirstGreetings(): Promise<FirstGreeting[]> {
    return this.FirstGreetingModel.find();
  }

  async saveFirstGreetings(createFirstGreetingDto: CreateGreetingDto): Promise<FirstGreeting> {
    const firstGreeting = new this.FirstGreetingModel(createFirstGreetingDto);
    return firstGreeting.save();
  }
}
