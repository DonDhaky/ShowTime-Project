import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './concerts.model';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Injectable()
export class ConcertsService {
  constructor(@InjectModel('Concert') private readonly concertModel: Model<ConcertDocument>) {}

  //async createtConcert(concertTitle: string, concertGenre: string, concertGroup: string, concertDate: string, concertPrice: string, concertBooking: string): Promise<Concert> {
    async createtConcert(createConcertDto: CreateConcertDto): Promise<Concert> {
      /*
    const title = concertTitle;
    const genre = concertGenre;
    const group = concertGroup;
    const date = concertDate;
    const price = concertPrice;
    const number_of_bookings = concertBooking;
    */

    const newConcert = new this.concertModel(
      createConcertDto
      /*{
      title,
      genre,
      group,
      date,
      price,
      number_of_bookings,
    }*/
    );
    await newConcert.save();
    return newConcert;
  }

  async getConcerts(): Promise<Concert[]> {
    return await this.concertModel.find().exec();
  }

  async getConcertById(id: string): Promise<Concert> {
    return await this.concertModel.findById(id).exec();
  }
  async getConcertByTitle(title: string): Promise<Concert> {
    return await this.concertModel.findOne({ title }).exec();
  }
  async getConcertByGroup(group: string): Promise<Concert[]> {
    return await this.concertModel.find({ group }).exec();
}

  async updateConcert(id: string, updateConcertDto: UpdateConcertDto): Promise<Concert> {
    return this.concertModel.findByIdAndUpdate(id, updateConcertDto, { new: true });
  }
  async patchConcert(id: string, updateConcertDto: UpdateConcertDto): Promise<Concert> {
    return await this.concertModel.findByIdAndUpdate(id, updateConcertDto, { new: true });
  }

  async deleteConcert(id: string): Promise<Concert> {
    return await this.concertModel.findByIdAndDelete(id).exec();
  }
}
