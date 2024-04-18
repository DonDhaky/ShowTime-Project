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



// concert.model.ts
/*
import * as mongoose from 'mongoose';

export const ConcertSchema = new mongoose.Schema({
  title: {type: String,},
  genre: {type: String,},
  group: {type: String,},
  date: {type: String,},
  price: {type: String,},
  number_of_bookings: {type: String,},
});

export interface Concert extends mongoose.Document {
  //_id: string;
  title: string;
  genre: string;
  group: string;
  date: string;
  price: string;
  number_of_bookings: string;
}
*/