import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailFormsController } from './mailForms.controller';
import { MailFormsRepository } from './mailForms.repository';
import { MailFormsService } from './mailForms.service';
import { LastGreeting, LastGreetingSchema } from './schemas/lastGreeting.schema';
import { FirstGreeting, FirstGreetingSchema } from './schemas/firstGreeting.schema';
import { Suggestion, SuggestionSchema } from './schemas/suggestion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LastGreeting.name, schema: LastGreetingSchema }]),
    MongooseModule.forFeature([{ name: FirstGreeting.name, schema: FirstGreetingSchema }]),
    MongooseModule.forFeature([{ name: Suggestion.name, schema: SuggestionSchema }]),
  ],
  controllers: [MailFormsController],
  providers: [MailFormsRepository, MailFormsService],
})
export class MailFormsModule {}
