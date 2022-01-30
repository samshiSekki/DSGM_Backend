import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FirstGreetingsDocument = FirstGreeting & Document;

@Schema()
export class FirstGreeting {
  @Prop()
  type: string;

  @Prop()
  greeting: string;
}

export const FirstGreetingSchema = SchemaFactory.createForClass(FirstGreeting);
