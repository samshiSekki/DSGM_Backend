import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentsDocument = Content & Document;

@Schema()
export class Content {
  @Prop()
  type: string;

  @Prop()
  content: string;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
