import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuggestionsDocument = Suggestion & Document;

@Schema()
export class Suggestion {
  @Prop()
  type: string;

  @Prop()
  category: string;

  @Prop()
  suggestion: string;
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion);
