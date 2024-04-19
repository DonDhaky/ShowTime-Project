import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { ConcertService } from './concerts.service';
import { Concert } from './concerts.model';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Controller('concerts')
export class ConcertController {
  constructor(private readonly ConcertService: ConcertService) {}

  //POST route
  @Post('/schedule')
  async createConcert(@Body() createConcertDto: CreateConcertDto) {
    const result = await this.ConcertService.createtConcert(createConcertDto);
    return {
      msg: 'Concert successfully registered',
      result,
      end: 'message end',
    };
  }

  //GET routes
  @Get()
  async getConcerts(): Promise<Concert[]> {
    return await this.ConcertService.getConcerts();
  }
  @Get(':id')
  async getConcertById(@Param('id') id: string): Promise<Concert> {
    return await this.ConcertService.getConcertById(id);
  }
  @Get('/bytitle/:title')
  async getConcertByTitle(@Param('title') title: string): Promise<Concert> {
    return await this.ConcertService.getConcertByTitle(title);
  }
  @Get('/bygroup/:group')
  async getConcertByGroup(@Param('group') group: string): Promise<Concert[]> {
    return await this.ConcertService.getConcertByGroup(group);
  }

  //UPDATE routes
  @Put(':id')
  async updateConcert(
    @Param('id') id: string,
    @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return await this.ConcertService.updateConcert(id, updateConcertDto);
  }
  @Patch(':id')
  async patchConcert(
    @Param('id') id: string,
    @Body() updateConcertDto: UpdateConcertDto,
  ) {
    return await this.ConcertService.patchConcert(id, updateConcertDto);
  }

  //DELETE route
  @Delete(':id')
  async deleteConcert(@Param('id') id: string): Promise<Concert> {
    return await this.ConcertService.deleteConcert(id);
  }
}
