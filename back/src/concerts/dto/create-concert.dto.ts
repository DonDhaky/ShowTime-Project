import { IsString } from 'class-validator';

export class CreateConcertDto {
  @IsString()
  title: string;

  @IsString()
  genre: string;

  @IsString()
  group: string;

  @IsString()
  date: string;

  @IsString()
  price: string;

  @IsString()
  number_of_bookings: string;

}