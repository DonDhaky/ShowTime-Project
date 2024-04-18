import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  genre: string;

  @Prop()
  group: string;

  @Prop()
  date: string;

  @Prop()
  price: string;

  @Prop()
  number_of_bookings: string;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
