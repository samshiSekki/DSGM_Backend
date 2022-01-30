import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LastGreetingsDocument = LastGreeting & Document;

@Schema()
export class LastGreeting {
  @Prop()
  type: string;

  @Prop()
  greeting: string;
}

export const LastGreetingSchema = SchemaFactory.createForClass(LastGreeting);
