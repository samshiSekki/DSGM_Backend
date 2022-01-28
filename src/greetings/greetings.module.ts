import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GreetingsController } from './greetings.controller';
import { GreetingsRepository } from './greetings.repository';
import { GreetingsService } from './greetings.service';
import { LastGreeting, LastGreetingSchema } from './lastGreeting.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: LastGreeting.name, schema: LastGreetingSchema }])],
  controllers: [GreetingsController],
  providers: [GreetingsRepository, GreetingsService],
})
export class GreetingsModule {}
