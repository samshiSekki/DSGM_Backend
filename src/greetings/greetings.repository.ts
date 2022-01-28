import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLastGreetingDto } from './create-greeting.dto';
import { LastGreeting, LastGreetingsDocument } from './lastGreeting.schema';

export class GreetingsRepository {
  constructor(
    @InjectModel(LastGreeting.name)
    private LastGreetingModel: Model<LastGreetingsDocument>,
  ) {}

  async findAllLastGreetings(): Promise<LastGreeting[]> {
    return this.LastGreetingModel.find();
  }

  async saveLastGreetings(createLastGreetingDto: CreateLastGreetingDto): Promise<LastGreeting> {
    const lastGreeting = new this.LastGreetingModel(createLastGreetingDto);
    return lastGreeting.save();
  }
}
