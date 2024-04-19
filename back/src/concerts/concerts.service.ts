import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './concerts.model';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Injectable()
export class ConcertService {
  constructor(@InjectModel('Concert') private readonly concertModel: Model<ConcertDocument>) {}

  //POST method
  async createtConcert(createConcertDto: CreateConcertDto): Promise<Concert> {
    const newConcert = new this.concertModel(createConcertDto);
    await newConcert.save();
    return newConcert;
  }

  //GET methods
  async getConcerts(): Promise<Concert[]> {
    return await this.concertModel.find().exec();
  }
  async getConcertById(id: string): Promise<Concert> {
    return await this.concertModel.findById(id).exec();
  }
  async getConcertByGroup(group: string): Promise<Concert[]> {
    return await this.concertModel.find({ group }).exec();
  }

  //UPDATE methods
  async updateConcert(id: string, updateConcertDto: UpdateConcertDto): Promise<Concert> {
    return this.concertModel.findByIdAndUpdate(id, updateConcertDto, { new: true });
  }
  async patchConcert(id: string, updateConcertDto: UpdateConcertDto): Promise<Concert> {
    return await this.concertModel.findByIdAndUpdate(id, updateConcertDto, { new: true });
  }

  //DELETE method
  async deleteConcert(id: string): Promise<Concert> {
    return await this.concertModel.findByIdAndDelete(id).exec();
  }
}
