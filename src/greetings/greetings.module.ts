import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GreetingsController } from './greetings.controller';
import { GreetingsRepository } from './greetings.repository';
import { GreetingsService } from './greetings.service';
import { LastGreeting, LastGreetingSchema } from './schemas/lastGreeting.schema';
import { FirstGreeting, FirstGreetingSchema } from './schemas/firstGreeting.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LastGreeting.name, schema: LastGreetingSchema }]),
    MongooseModule.forFeature([{ name: FirstGreeting.name, schema: FirstGreetingSchema }]),
  ],
  controllers: [GreetingsController],
  providers: [GreetingsRepository, GreetingsService],
})
export class GreetingsModule {}
