import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type VisitDocument = Visit & Document;

@Schema()
export class Visit {

  @ApiProperty()
  @Prop()
  counter: Number;
}

export const VisitSchema = SchemaFactory.createForClass(Visit);
